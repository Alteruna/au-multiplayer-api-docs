# SyncedKey Class




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class SyncedKey
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  SyncedKey</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Alteruna_SyncedKey__ctor_1">SyncedKey(KeyCode, SyncedKey.KeyMode)</a></td>
<td>Set key and mode without registering.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey__ctor">SyncedKey(IInput, KeyCode, SyncedKey.KeyMode)</a></td>
<td>Register key and mode.</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Alteruna_SyncedKey_Key">Key</a></td>
<td>Registered Keycode input. On set, reregister if already registered.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_SyncedKey_Deregister">Deregister</a></td>
<td>Deregister from <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey_Register">Register()</a></td>
<td>Register key to a previously set <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey_Register_1">Register(IInput)</a></td>
<td>Register key to target <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey_Register_2">Register(IInput, KeyCode)</a></td>
<td>Register key to target <code>IInput</code>.</td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Alteruna_SyncedKey_op_Implicit">Implicit(SyncedKey to Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey_op_Implicit_1">Implicit(SyncedKey to Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_SyncedKey_op_Implicit_2">Implicit(SyncedKey to Single)</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_SyncedKey_DoubleTapTime">DoubleTapTime</a></td>
<td>Max time between taps for a valid double tap for the key mode doubleTap</td></tr>
<tr>
<td><a href="F_Alteruna_SyncedKey_InputManager">InputManager</a></td>
<td>Connected <code>IInput</code>.</td></tr>
<tr>
<td><a href="F_Alteruna_SyncedKey_mode">mode</a></td>
<td>key mode.</td></tr>
<tr>
<td><a href="F_Alteruna_SyncedKey_OnInputChanged">OnInputChanged</a></td>
<td>Invokes when value get changed.</td></tr>
<tr>
<td><a href="F_Alteruna_SyncedKey_Value">Value</a></td>
<td>Value of target input key.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
