//===============================================================================================================
// System  : Sandcastle Help File Builder
// File    : presentationStyle.js
// Author  : Eric Woodruff  (Eric@EWoodruff.us)
// Updated : 08/13/2022
// Note    : Copyright 2014-2022, Eric Woodruff, All rights reserved
//           Portions Copyright 2010-2022 Microsoft, All rights reserved
//
// This file contains the methods necessary to implement the language filtering, collapsible section, and
// copy to clipboard options.
//
// This code is published under the Microsoft Public License (Ms-PL).  A copy of the license should be
// distributed with the code and can be found at the project website: https://GitHub.com/EWSoftware/SHFB.  This
// notice, the author's name, and all copyright notices must remain intact in all applications, documentation,
// and source files.
//
//    Date     Who  Comments
// ==============================================================================================================
// 05/04/2014  EFW  Created the code based on the MS Help Viewer script
//===============================================================================================================

// Ignore Spelling: fti json

//===============================================================================================================
// This section contains the methods used to implement the language filter

// The IDs of language-specific text (LST) spans are used as dictionary keys so that we can get access to the
// spans and update them when the user selects a different language in the language filter.  The values of the
// dictionary objects are pipe separated language-specific attributes (lang1=value|lang2=value|lang3=value).
// The language ID can be specific (cs, vb, cpp, etc.) or may be a neutral entry (nu) which specifies text
// common to multiple languages.  If a language is not present and there is no neutral entry, the span is hidden
// for all languages to which it does not apply.
var allLSTSetIds = new Object();

var clipboardHandler = null;

// Set the default language
function SetDefaultLanguage(defaultLanguage)
{
    // Create the clipboard handler
    if(typeof (Clipboard) === "function")
    {
        clipboardHandler = new ClipboardJS('.copyCode',
            {
                text: function (trigger)
                {
                    var codePanel = trigger.parentElement.parentElement;

                    if(codePanel === null || typeof(codePanel) === "undefined")
                        return "";

                    if($(codePanel).hasClass("codeHeader"))
                        codePanel = codePanel.parentElement;

                    codePanel = $(codePanel).find("code");

                    if(codePanel === null || typeof(codePanel) === "undefined")
                        return "";

                    // Toggle the icon briefly to show success
                    var iEl = $(trigger).children("span").children("i");

                    if(iEl.length !== 0)
                    {
                        $(iEl).removeClass("fa-copy").addClass("fa-check");

                        setTimeout(function ()
                        {
                            $(iEl).removeClass("fa-check").addClass("fa-copy");
                        }, 500);
                    }

                    return $(codePanel).text();
                }
            });
    }

    // Connect the language filter items to their event handler
    $(".languageFilterItem").click(function ()
    {
        SelectLanguage(this);
    });

    // Add language-specific text spans on startup.  We can't tell for sure if there are any as some
    // may be added after transformation by other components.
    $("span[data-languageSpecificText]").each(function ()
    {
        allLSTSetIds[this.id] = $(this).attr("data-languageSpecificText");
    });

    if(typeof (defaultLanguage) === "undefined" || defaultLanguage === null || defaultLanguage.trim() === "")
        defaultLanguage = "cs";

    var language = localStorage.getItem("SelectedLanguage");

    if(language === null)
        language = defaultLanguage;

    var languageFilterItem = $("[data-languageId=" + language + "]")[0]
    var currentLanguage = document.getElementById("CurrentLanguage");

    currentLanguage.innerText = languageFilterItem.innerText;

    SetSelectedLanguage(language);
}

// This is called by the language filter items to change the selected language
function SelectLanguage(languageFilterItem)
{
    var currentLanguage = document.getElementById("CurrentLanguage");

    currentLanguage.innerText = languageFilterItem.innerText;

    var language = $(languageFilterItem).attr("data-languageId");

    localStorage.setItem("SelectedLanguage", language);

    SetSelectedLanguage(language);
}

// This function executes when setting the default language and selecting a language option from the language
// filter dropdown.  The parameter is the user chosen programming language.
function SetSelectedLanguage(language)
{
    // If LST exists on the page, set the LST to show the user selected programming language
    for(var lstMember in allLSTSetIds)
    {
        var devLangSpan = document.getElementById(lstMember);

        if(devLangSpan !== null)
        {
            // There may be a carriage return before the LST span in the content so the replace function below
            // is used to trim the whitespace at the end of the previous node of the current LST node.
            if(devLangSpan.previousSibling !== null && devLangSpan.previousSibling.nodeValue !== null)
                devLangSpan.previousSibling.nodeValue = devLangSpan.previousSibling.nodeValue.replace(/[\r\n]+$/, "");

            var langs = allLSTSetIds[lstMember].split("|");
            var k = 0;
            var keyValue;

            while(k < langs.length)
            {
                keyValue = langs[k].split("=");

                if(keyValue[0] === language)
                {
                    devLangSpan.innerHTML = keyValue[1];
                    break;
                }

                k++;
            }

            // If not found, default to the neutral language.  If there is no neutral language entry, clear the
            // content to hide it.
            if(k >= langs.length)
            {
                if(language !== "nu")
                {
                    k = 0;

                    while(k < langs.length)
                    {
                        keyValue = langs[k].split("=");

                        if(keyValue[0] === "nu")
                        {
                            devLangSpan.innerHTML = keyValue[1];
                            break;
                        }

                        k++;
                    }
                }

                if(k >= langs.length)
                    devLangSpan.innerHTML = "";
            }
        }
    }

    // If code snippet groups exist, set the current language for them
    $("div[data-codeSnippetLanguage]").each(function ()
    {
        if($(this).attr("data-codeSnippetLanguage") === language)
        {
            $(this).removeClass("is-hidden");
        }
        else
        {
            $(this).addClass("is-hidden");
        }
    });
}

//===============================================================================================================
// In This Article navigation aid methods

var headerPositions = [], headerElements = [];
var quickLinks = null;

// Get the positions of the quick link header elements and set up the In This Article navigation links to
// scroll the section into view when clicked and get highlighted when the related section scrolls into view.
function InitializeQuickLinks()
{
    var sectionList = $("#InThisArticleMenu")[0];

    $(".quickLinkHeader").each(function ()
    {
        headerPositions.push(this.getBoundingClientRect().top);
        headerElements.push(this);
    });

    if(headerElements.length !== 0)
    {
        sectionList.parentElement.classList.remove("is-hidden");
        quickLinks = $(".quickLink");

        $(quickLinks[0]).addClass("is-active-quickLink");

        for(var i = 0; i < quickLinks.length; i++)
        {
            quickLinks[i].addEventListener("click", function (event)
            {
                document.removeEventListener("scroll", QuickLinkScrollHandler, true);

                for(i = 0; i < quickLinks.length; i++)
                {
                    if(quickLinks[i] === this)
                        headerElements[i].scrollIntoView();

                    quickLinks[i].classList.remove("is-active-quickLink");
                }

                this.classList.add("is-active-quickLink");

                setTimeout(function ()
                {
                    document.addEventListener("scroll", QuickLinkScrollHandler, true);
                }, 600);
            });
        }

        document.addEventListener("scroll", QuickLinkScrollHandler, true);
    }
}

// Highlight the nearest quick link as the document scrolls
function QuickLinkScrollHandler()
{
    currentScrollPosition = document.documentElement.scrollTop;
    var i = 0;

    while(i < headerPositions.length - 1)
    {
        if(currentScrollPosition <= headerPositions[i + 1])
            break;

        i++;
    }

    if(i >= headerPositions.length)
        i = headerPositions.length  - 1;

    var currentActive = document.getElementsByClassName("is-active-quickLink")[0];

    if(currentActive !== undefined)
        currentActive.classList.remove("is-active-quickLink");

    quickLinks[i].classList.add("is-active-quickLink");
}

//===============================================================================================================
// Collapsible section methods

// Expand or collapse a topic section
function SectionExpandCollapse(item)
{
    var section = item.parentElement.nextElementSibling;

    if(section !== null)
    {
        $(item).toggleClass("toggleCollapsed");

        if(section.style.display === "")
            section.style.display = "none";
        else
            section.style.display = "";
    }
}

// Expand or collapse a topic section when it has the focus and Enter is hit
function SectionExpandCollapseCheckKey(item, togglePrefix, eventArgs)
{
    if(eventArgs.keyCode === 13)
        SectionExpandCollapse(item);
}

//===============================================================================================================
// This section contains the methods necessary to implement the TOC and search functionality.

// Toggle a TOC entry between its collapsed and expanded state loading the child elements if necessary
function ToggleExpandCollapse(item)
{
    $(item).toggleClass("toggleExpanded");

    if($(item).parent().next().children().length === 0)
    {
        LoadTocFile($(item).attr("data-tocFile"), $(item).parent().next());
    }

    $(item).parent().next().toggleClass("is-hidden");
}

// Load a TOC fragment file and add it to the page's TOC
function LoadTocFile(tocFile, parentElement)
{
    var selectedTopicId = null;

    if(tocFile === null)
    {
        $("#ShowHideTOC").click(function () {
            $("#TOCColumn").toggleClass("is-hidden-mobile");
        });

        tocFile = $("meta[name='tocFile']").attr("content");
        selectedTopicId = $("meta[name='guid']").attr("content");
    }

    $.ajax({
        url: tocFile,
        cache: false,
        async: true,
        dataType: "xml",
        success: function (data)
        {
            ParentTocElement(parentElement, selectedTopicId, data);
        }
    });
}

// Parent the TOC elements to the given element.  If null, the elements represent the root TOC for the page and
// it will also set the breadcrumb trail.
function ParentTocElement(parentElement, selectedTopicId, tocElements)
{
    var toc = $(tocElements).find("tocItems").html();

    if(parentElement === null)
    {
        var topicTitle = $("meta[name='Title']").attr("content");

        $("#TopicBreadcrumbs").append($(tocElements).find("breadcrumbs").html());
        $("#TopicBreadcrumbs").append($("<li><p>" + topicTitle + "</p></li>"));
        $("#TableOfContents").append(toc);
    }
    else
        parentElement.append(toc);

    if(selectedTopicId !== null)
    {
        var selectedEntry = $("#" + selectedTopicId);

        $(selectedEntry).addClass("is-active");

        if($(selectedEntry).next().children().length === 0 && $(selectedEntry).children().length !== 0 &&
          $(selectedEntry).children()[0].nodeName === "SPAN")
        {
            ToggleExpandCollapse($(selectedEntry).children()[0]);
        }
    }
}

// Search method (0 = To be determined, 1 = ASPX, 2 = PHP, anything else = client-side script
var searchMethod = 0;

// Transfer to the search page from a topic
function TransferToSearchPage()
{
    var searchText = document.getElementById("SearchTerms").value.trim();

    if(searchText.length !== 0)
        document.location.replace(encodeURI("../search.html?SearchText=" + searchText));
}

// Initiate a search when the search page loads
function OnSearchPageLoad()
{
    var queryString = decodeURI(document.location.search);

    if(queryString !== "")
    {
        var idx, options = queryString.split(/[?=&]/);

        for(idx = 0; idx < options.length; idx++)
        {
            if(options[idx] === "SearchText" && idx + 1 < options.length)
            {
                document.getElementById("txtSearchText").value = options[idx + 1];
                PerformSearch();
                break;
            }
        }
    }
}

// Perform a search using the best available method
function PerformSearch()
{
    var searchText = document.getElementById("txtSearchText").value;
    var searchResults = document.getElementById("searchResults");

    if(searchText.length === 0)
    {
        searchResults.innerHTML = "<strong>Nothing found</strong>";
        return;
    }

    searchResults.innerHTML = "Searching...";

    // Determine the search method if not done already.  The ASPX and PHP searches are more efficient as they
    // run asynchronously server-side.  If they can't be used, it defaults to the client-side script below which
    // will work but has to download the index files.  For large help sites, this can be inefficient.
    if(searchMethod === 0)
        searchMethod = DetermineSearchMethod();

    if(searchMethod === 1)
    {
        $.ajax({
            type: "GET",
            url: encodeURI("SearchHelp.aspx?Keywords=" + searchText),
            cache: false,
            success: function (html)
            {
                searchResults.innerHTML = html;
            }
        });

        return;
    }

    if(searchMethod === 2)
    {
        $.ajax({
            type: "GET",
            url: encodeURI("SearchHelp.php?Keywords=" + searchText),
            cache: false,
            success: function (html)
            {
                searchResults.innerHTML = html;
            }
        });

        return;
    }

    // Parse the keywords
    var keywords = ParseKeywords(searchText);

    // Get the list of files.  We'll be getting multiple files so we need to do this synchronously.
    var fileList = [];

    $.ajax({
        type: "GET",
        url: "fti/FTI_Files.json",
        cache: false,
        dataType: "json",
        async: false,
        success: function (data)
        {
            $.each(data, function (key, val)
            {
                fileList[key] = val;
            });
        }
    });

	/*
    var letters = [];
    var wordDictionary = {};
    var wordNotFound = false;

    // Load the keyword files for each keyword starting letter
    for(var idx = 0; idx < keywords.length && !wordNotFound; idx++)
    {
        var letter = keywords[idx].substring(0, 1);

        if($.inArray(letter, letters) === -1)
        {
            letters.push(letter);

            $.ajax({
                type: "GET",
                url: "fti/FTI_" + letter.charCodeAt(0) + ".json",
                cache: false,
                dataType: "json",
                async: false,
                success: function (data)
                {
                    var wordCount = 0;

                    $.each(data, function (key, val)
                    {
                        wordDictionary[key] = val;
                        wordCount++;
                    });

                    if(wordCount === 0)
                        wordNotFound = true;
                }
            });
        }
    }

    if(wordNotFound)
        searchResults.innerHTML = "<strong>Nothing found</strong>";
    else
	*/
        searchResults.innerHTML = SearchForKeywords(keywords, fileList);
}

// Determine the search method by seeing if the ASPX or PHP search pages are present and working
function DetermineSearchMethod()
{
    var method = 3;

    try
    {
        $.ajax({
            type: "GET",
            url: "SearchHelp.aspx",
            cache: false,
            async: false,
            success: function (html)
            {
                if(html.substring(0, 8) === "<strong>")
                    method = 1;
            }
        });

        if(method === 3)
            $.ajax({
                type: "GET",
                url: "SearchHelp.php",
                cache: false,
                async: false,
                success: function (html)
                {
                    if(html.substring(0, 8) === "<strong>")
                        method = 2;
                }
            });
    }
    catch(e)
    {
        // Ignore exceptions
    }

    return method;
}

// Split the search text up into keywords
function ParseKeywords(keywords)
{
    var keywordList = [];
    var checkWord;
    var words = keywords.split(/[\s!@#$%^&*()\-=+[\]{}\\|<>;:'",.<>/?`~]+/);

    for(var idx = 0; idx < words.length; idx++)
    {
        checkWord = words[idx].toLowerCase();

        if(checkWord.length >= 2)
        {
            var charCode = checkWord.charCodeAt(0);

            if((charCode < 48 || charCode > 57) && $.inArray(checkWord, keywordList) === -1)
                keywordList.push(checkWord);
        }
    }

    return keywordList;
}

function matchCount(a, b) {

	let la = a.length;
	let lb = b.length;

	if (la < lb) return matchCount(b, a);

	let matchingCharacters = 0;
	la -= lb;

	for (let i = 0; i < la; i++) {
		let match = 0;
		for (let k = 0; k < lb; k++) { 
			if (a[i+k] === b[k]) {
				match++
			} else {
				break;
			}
		}
		if (match.length === lb) {
			return lb;
		}
		matchingCharacters = Math.max(matchingCharacters, match);
	}
	return matchingCharacters;
}

function similarityScore(a, b) {

	let matchingCharacters = matchCount(a, b);
	let m = Math.max(a.length, b.length);
	return (matchingCharacters * matchingCharacters) / m;
}

function SearchForKeywords(keywords, fileInfo)
{
	var rankings = [];
	var idx;
	var minMatch = 0.05;

	var l = fileInfo.length;

	for(idx = 0; idx < keywords.length; idx++)
	{
		keywords[idx] = keywords[idx].toLowerCase();
	}

	// Rank the files based on the number of times the words occurs
	for(var fileIdx = 0; fileIdx < l; fileIdx++)
	{
		// Split out the title, filename, and word count
		var fileIndex = fileInfo[fileIdx].split(/\0/);

		var title = fileIndex[0];
		var titleLower = title.toLowerCase();
		var filename = fileIndex[1];
		var match = 0;

		for(idx = 0; idx < keywords.length; idx++)
		{
			match += similarityScore(titleLower, keywords[idx])
		}

		if (match < minMatch) continue;

		//if (titleLower.substring(titleLower.length - 5) === "class") match += 0.01;

		rankings.push({ Filename: filename, PageTitle: title, Rank: match });
	}

	if(rankings.length === 0)
	return "<strong>Nothing found</strong>";

	var ommited = 0;

	while(rankings.length > 100) {
		minMatch += 0.075;
		for(var i = 0; i < rankings.length; i++) {
			if(rankings[i].Rank < minMatch) {
				rankings.splice(i, 1);
				ommited++;
				i--;
			}
		}
	}

	rankings.sort(function (x, y)
	{
		return y.Rank - x.Rank;
	});

	// Format and return the results
	var content = "<ol>";

	for(var r in rankings)
		content += "<li><a href=\"" + rankings[r].Filename + "\" target=\"_blank\">" +
			rankings[r].PageTitle + "</a></li>";

	content += "</ol>";

	if(ommited > 0)
		content += "<p>Omitted " + ommited + " more results</p>";

	return content;
}