# UniqueAvatarChild Class


Instantiate a prefab as a child from a array. If avatar index goes beyond the lenght of the array, it will loop.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class UniqueAvatarChild : MonoBehaviour
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  UniqueAvatarChild</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_Awake">Awake</a></td>
<td>Register event and update hew of already possessed.</td></tr>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_GetAvatarChild">GetAvatarChild</a></td>
<td>Get current avatar child object.</td></tr>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_OverwritePrefab">OverwritePrefab</a></td>
<td>Instantiate a new child prefab and destroy exising object.</td></tr>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_SetPrefab_1">SetPrefab(UInt16)</a></td>
<td>Set child prefab to target id. Wraps around if <code>Prefabs</code> is less than id. If child prefab already is set, replace it.</td></tr>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_SetPrefab">SetPrefab(User)</a></td>
<td>Set child prefab to target user's index. Wraps around if <code>Prefabs</code> is less than id. If child prefab already is set, replace it.</td></tr>
<tr>
<td><a href="M_Alteruna_UniqueAvatarChild_TryGetAvatarChild">TryGetAvatarChild</a></td>
<td>Attempt to get current avatar child object.</td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_UniqueAvatarChild_Avatar">Avatar</a></td>
<td>A reference to a avatar owner object.</td></tr>
<tr>
<td><a href="F_Alteruna_UniqueAvatarChild_Prefabs">Prefabs</a></td>
<td>The array of prefabs to spawn as children. When index exceeds the length, loop.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
