# CommunicationBridge Class




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class CommunicationBridge : MonoBehaviour
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  CommunicationBridge</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Alteruna_Avatar">Alteruna.Avatar</a><br /><a href="T_Alteruna_CommunicationBridgeUID">Alteruna.CommunicationBridgeUID</a><br /><a href="T_Alteruna_InputSynchronizable">Alteruna.InputSynchronizable</a><br /><a href="T_Alteruna_Spawner">Alteruna.Spawner</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Alteruna_CommunicationBridge_OnEnable">OnEnable</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_CommunicationBridge_SetMultiplayerComponent">SetMultiplayerComponent</a></td>
<td>If the <code>Multiplayer</code> reference is null, set it to active <code>Multiplayer</code> component. 

## Example


**C#**  
``` C#
void OnEnable() => SetMultiplayerComponent();
```
<code>SetMultiplayerComponent</code> call it in <code>OnEnable</code> unless hidden.</td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_CommunicationBridge_Multiplayer">Multiplayer</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
