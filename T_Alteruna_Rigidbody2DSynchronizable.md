# Rigidbody2DSynchronizable Class


`Rigidbody2DSynchronizable` is a `Synchronizable` that synchronizes the state of a `Rigidbody2D` component.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class Rigidbody2DSynchronizable : Synchronizable
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  <a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID</a>  →  <a href="T_Alteruna_Synchronizable">Synchronizable</a>  →  Rigidbody2DSynchronizable</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_Rigidbody2DSynchronizable_angularVelocity">angularVelocity</a></td>
<td><p>Angular velocity in degrees per second.</p></td></tr>
<tr>
<td><a href="P_Alteruna_Rigidbody2DSynchronizable_position">position</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_Rigidbody2DSynchronizable_rotation">rotation</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_Rigidbody2DSynchronizable_SendData">SendData</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Alteruna_Rigidbody2DSynchronizable_velocity">velocity</a></td>
<td><p>Linear velocity of the Rigidbody in units per second.</p></td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_AssembleData">AssembleData</a></td>
<td><br />(Overrides <a href="M_Alteruna_Synchronizable_AssembleData">Synchronizable.AssembleData(Writer, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_DisassembleData">DisassembleData</a></td>
<td><br />(Overrides <a href="M_Alteruna_Synchronizable_DisassembleData">Synchronizable.DisassembleData(Reader, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_MovePosition">MovePosition</a></td>
<td><p>Moves the rigidbody to position.</p></td></tr>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_MoveRotation">MoveRotation</a></td>
<td><p>Rotates the Rigidbody to angle (given in degrees).</p></td></tr>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_SetRotation">SetRotation</a></td>
<td><p>Sets the rotation of the Rigidbody2D to angle (given in degrees).</p></td></tr>
<tr>
<td><a href="M_Alteruna_Rigidbody2DSynchronizable_SyncSettings">SyncSettings</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_Rigidbody2DSynchronizable_FullSyncEveryNSync">FullSyncEveryNSync</a></td>
<td> </td></tr>
<tr>
<td><a href="F_Alteruna_Rigidbody2DSynchronizable_SyncEveryNUpdates">SyncEveryNUpdates</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
