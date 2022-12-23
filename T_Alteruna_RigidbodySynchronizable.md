# RigidbodySynchronizable Class


`RigidbodySynchronizable` is a `Synchronizable` that synchronizes the state of a `Rigidbody` component.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class RigidbodySynchronizable : Synchronizable
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  <a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID</a>  →  <a href="T_Alteruna_Synchronizable">Synchronizable</a>  →  RigidbodySynchronizable</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_RigidbodySynchronizable_angularVelocity">angularVelocity</a></td>
<td><p>The angular velocity vector of the rigidbody measured in radians per second.</p></td></tr>
<tr>
<td><a href="P_Alteruna_RigidbodySynchronizable_position">position</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_RigidbodySynchronizable_rotation">rotation</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_RigidbodySynchronizable_SendData">SendData</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_RigidbodySynchronizable_velocity">velocity</a></td>
<td><p>The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position.</p></td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_AssembleData">AssembleData</a></td>
<td><br />(Overrides <a href="M_Alteruna_Synchronizable_AssembleData">Synchronizable.AssembleData(Writer, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_Awake">Awake</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_DisassembleData">DisassembleData</a></td>
<td><br />(Overrides <a href="M_Alteruna_Synchronizable_DisassembleData">Synchronizable.DisassembleData(Reader, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_FixedUpdate">FixedUpdate</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_MovePosition">MovePosition</a></td>
<td><p>Moves the kinematic Rigidbody towards position.</p></td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_MoveRotation">MoveRotation</a></td>
<td><p>Rotates the rigidbody to rotation.</p></td></tr>
<tr>
<td><a href="M_Alteruna_RigidbodySynchronizable_SyncSettings">SyncSettings</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_RigidbodySynchronizable_FullSyncEveryNSync">FullSyncEveryNSync</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Alteruna_RigidbodySynchronizable_SyncEveryNUpdates">SyncEveryNUpdates</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
