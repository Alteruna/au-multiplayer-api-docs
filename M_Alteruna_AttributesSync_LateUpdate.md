# LateUpdate Method


Handle changes fields.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public void LateUpdate()
```



## Remarks
If hidden, consider calling `Commit()` after changes

## Example
Writing your own LateUpdate by hiding the base LateUpdate. 

**C#**  
``` C#
void LateUpdate()
{
    // Check for any uncommitted changes in fields.
    if (UncommittedFields())
    {
        // Commit changes.
        Commit();
    }
}
```


## See Also


#### Reference
<a href="T_Alteruna_AttributesSync">AttributesSync Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
