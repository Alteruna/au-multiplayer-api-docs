# SyncedAxis Class


Alternative way of implementing `InputSynchronizable`.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class SyncedAxis
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  SyncedAxis</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Alteruna_SyncedAxis__ctor_1">SyncedAxis(String)</a></td>
<td>Set axis without registering.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis__ctor">SyncedAxis(IInput, String)</a></td>
<td>Register axis.</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Alteruna_SyncedAxis_Axis">Axis</a></td>
<td>Target axis.</td></tr>
<tr>
<td><a href="P_Alteruna_SyncedAxis_Value">Value</a></td>
<td>Raw value of axis.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_SyncedAxis_Deregister">Deregister</a></td>
<td>Deregister from <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis_Register">Register()</a></td>
<td>Register key to target <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis_Register_1">Register(IInput)</a></td>
<td>Register key on target <code>IInput</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis_Register_2">Register(IInput, String)</a></td>
<td>Register key to target <code>IInput</code>.</td></tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Alteruna_SyncedAxis_op_Implicit">Implicit(SyncedAxis to Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis_op_Implicit_1">Implicit(SyncedAxis to Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_SyncedAxis_op_Implicit_2">Implicit(SyncedAxis to Single)</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_SyncedAxis_InputManager">InputManager</a></td>
<td>Connected <code>IInput</code>.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
<a href="T_Alteruna_InputSynchronizable">InputSynchronizable</a>  
<a href="T_Alteruna_IInput">IInput</a>  
