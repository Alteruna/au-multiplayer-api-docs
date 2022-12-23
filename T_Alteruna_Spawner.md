# Spawner Class


Class `Spawner` defines a component which can instantiate and destrot objects on all clients in the Room simultaneously.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class Spawner : CommunicationBridge
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  Spawner</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Alteruna_Spawner_Despawn">Despawn</a></td>
<td>Invoked when a <code>GameObject</code> has been spawned by a <code>User</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn">Spawn(Int32)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn_1">Spawn(Int32, Vector3)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn_2">Spawn(Int32, Vector3, Quaternion)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn_4">Spawn(Int32, Vector3, Vector3)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn_3">Spawn(Int32, Vector3, Quaternion, Vector3)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Spawn_5">Spawn(Int32, Vector3, Vector3, Vector3)</a></td>
<td>Spawn an new object for all <code>Users</code> in the Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Spawner_Start">Start</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_Spawner_ObjectDespawned">ObjectDespawned</a></td>
<td>Invoked when a <code>GameObject</code> was despawned by a <code>User</code> in the Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Spawner_ObjectSpawned">ObjectSpawned</a></td>
<td>Invoked when a <code>GameObject</code> has been spawned by a <code>User</code> in the Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Spawner_SpawnableObjects">SpawnableObjects</a></td>
<td>List of <code>GameObjects</code> which can be spawned during the game.</td></tr>
<tr>
<td><a href="F_Alteruna_Spawner_SpawnedObjects">SpawnedObjects</a></td>
<td>List of all currently spawned <code>GameObjects</code> in the Room.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
