# Avatar Class


`Avatar` is used to represent a player in a Room. 

## Example
Avatars have events that can be used similar to OnEnable and OnDisable. The possession status can also be accessed with `Avatar.IsPossessed`

**C#**  
``` C#
// Avatar reference
public Avatar MyAvatar;

void Awake() {
    // Event for avatar possessed
    MyAvatar.OnPossessed.AddListener(Possessed);

    // OnUnpossessed is called on unposses and client disconnect.
}

// Log username on Possession
void Possessed(User user) => Debug.Log("Possessed by " + user.Name);
```
 When working with Avatars, the most useful information is to check for the controlled Avatar, this can be done using `Avatar.IsMe`. To make a fist person game, simply move the camera to the avatar with the `Avatar.IsMe` set to true. See following example. 

**C#**  
``` C#
public Avatar MyAvatar;

void Awake() {
    MyAvatar.OnPossessed.AddListener(Possessed);
}

void Possessed(User user) {
    // Return if not user's client.
    if (!user.IsMe) return;

    // Set camera as child to object
    Camera myCamera = Camera.main;
    myCamera.transform.position = transform.position + new Vector3(0, 0.4f, 0);
    myCamera.transform.SetParent(transform);

    // Lock cursor
    Cursor.lockState = CursorLockMode.Locked;
    Cursor.visible = false;
}
```




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class Avatar : CommunicationBridge
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  Avatar</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_Avatar_Possessed">Possessed</a></td>
<td>Due for removal in 1.2.0<br /><strong>Obsolete.</strong></td></tr>
<tr>
<td><a href="P_Alteruna_Avatar_Unpossessed">Unpossessed</a></td>
<td>Due for removal in 1.2.0<br /><strong>Obsolete.</strong></td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_Avatar_Serialize">Serialize</a></td>
<td>Serializes transform and synchronizables.</td></tr>
<tr>
<td><a href="M_Alteruna_Avatar_ToString">ToString</a></td>
<td>Get name and index in a string. Returns "Unprocessed" when IsPossessed is false.<br />(Overrides Object.ToString())</td></tr>
<tr>
<td><a href="M_Alteruna_Avatar_Unserialize">Unserialize</a></td>
<td>Unserialize transform and synchronizables.</td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_Avatar_IsMe">IsMe</a></td>
<td>Describes if this <code>Avatar</code> represents the local player or not.</td></tr>
<tr>
<td><a href="F_Alteruna_Avatar_IsPossessed">IsPossessed</a></td>
<td>True when possessed by a <code>User</code>.</td></tr>
<tr>
<td><a href="F_Alteruna_Avatar_OnPossessed">OnPossessed</a></td>
<td>On Avatar get posses by new <code>User</code>.</td></tr>
<tr>
<td><a href="F_Alteruna_Avatar_OnUnpossessed">OnUnpossessed</a></td>
<td>On Avatar unpossess.</td></tr>
<tr>
<td><a href="F_Alteruna_Avatar_Possessor">Possessor</a></td>
<td><code>User</code> that posses the <code>Avatar</code>. Null when unprocessed.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
