# CommunicationBridgeUID Class


Holds references and methods for communications with active `Multiplayer` and `UID` components.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public abstract class CommunicationBridgeUID : CommunicationBridge
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  CommunicationBridgeUID</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Alteruna_AttributesSync">Alteruna.AttributesSync</a><br /><a href="T_Alteruna_Synchronizable">Alteruna.Synchronizable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID__ctor">CommunicationBridgeUID</a></td>
<td> </td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Alteruna_CommunicationBridgeUID_HasOwnership">HasOwnership</a></td>
<td>Describes whether we have ownership of this Synchronizable.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_GetUID">GetUID</a></td>
<td>Get the UniqueID of this <code>Synchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_OnDestroy">OnDestroy</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_OnEnable">OnEnable</a></td>
<td>Register the object to the multiplayer component.</td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_OverrideUID">OverrideUID</a></td>
<td>Override this <code>Synchronizables</code> current unique ID with a new Guid.</td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_ReleaseOwnership">ReleaseOwnership</a></td>
<td>Release ownership of this <code>Synchronizable so that others can take ownership of it.</code></td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_Reset">Reset</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_Serialize">Serialize</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_TakeOwnership">TakeOwnership</a></td>
<td>Attempt to take ownership of this <code>Synchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridgeUID_Unserialize">Unserialize</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
