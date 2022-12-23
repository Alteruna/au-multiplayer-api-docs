# Multiplayer Class


The component `Multiplayer` gives access to all functionality and communication for Alteruna Multiplayer.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class Multiplayer : MonoBehaviour, 
	IServiceListener, IServiceStateListener
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  Multiplayer</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Alteruna_IServiceListener">IServiceListener</a>, <a href="T_Alteruna_IServiceStateListener">IServiceStateListener</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_Multiplayer_AvailableRooms">AvailableRooms</a></td>
<td>A list of all the currently available Rooms on the server.</td></tr>
<tr>
<td><a href="P_Alteruna_Multiplayer_CurrentRoom">CurrentRoom</a></td>
<td>The Room we are currently connected to.</td></tr>
<tr>
<td><a href="P_Alteruna_Multiplayer_InRoom">InRoom</a></td>
<td>Whether currently connected to a Room.</td></tr>
<tr>
<td><a href="P_Alteruna_Multiplayer_IsConnected">IsConnected</a></td>
<td>Whether currently connected to a server.</td></tr>
<tr>
<td><a href="P_Alteruna_Multiplayer_Me">Me</a></td>
<td>The User representing the local player.</td></tr>
<tr>
<td><a href="P_Alteruna_Multiplayer_NetworkStatistics">NetworkStatistics</a></td>
<td>Statistic on network data send and received in Kilobytes unless defined.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_Multiplayer_DeregisterCodec">DeregisterCodec</a></td>
<td>Deregister a Synchronizable from Alteruna Multiplayer, so that it is no longer being synchronized.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_GetAllSynchronizables">GetAllSynchronizables</a></td>
<td>Get a list of all currently registered Synchronizables.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_GetSynchronizable">GetSynchronizable</a></td>
<td>Get a Synchronizable through its UniqueID.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_GetUser">GetUser</a></td>
<td>Get User by index.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_GetUsers">GetUsers</a></td>
<td>Get all Users from current room.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_HasSynchroniable">HasSynchroniable</a></td>
<td>Whether Alteruna Multiplayer currently has a Synchronizable with the specified UniqueID registered.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_InvokeRemoteProcedure">InvokeRemoteProcedure(String, UserId, ProcedureParameters, ISerializable, Reliability, RemoteProcedureReply, RemoteProcedureAck)</a></td>
<td>Invoke a Remote Procedure Call (RPC).</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_InvokeRemoteProcedure_1">InvokeRemoteProcedure(String, UInt16, ProcedureParameters, ISerializable, Reliability, RemoteProcedureReply, RemoteProcedureAck)</a></td>
<td>Invoke a Remote Procedure Call (RPC).</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_JoinMatchmaking">JoinMatchmaking()</a></td>
<td>Join a Room through matchmaking.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_JoinMatchmaking_1">JoinMatchmaking(UInt16)</a></td>
<td>Join a Room through matchmaking using a pin.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_JoinOnDemandRoom">JoinOnDemandRoom</a></td>
<td>Join a dynamically created Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_JoinRoom">JoinRoom(Room)</a></td>
<td>Join an available Room.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_JoinRoom_1">JoinRoom(Room, UInt16)</a></td>
<td>Join an available Room using a pin.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_MulticastRemoteProcedure">MulticastRemoteProcedure</a></td>
<td>Invoke a Remote Procedure Call (RPC) for multiple Users.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnEndpointConnected">OnEndpointConnected</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnEndpointDisconnected">OnEndpointDisconnected</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnForceSynced">OnForceSynced</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnLockAquired">OnLockAquired</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnLockDenied">OnLockDenied</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnLockRequested">OnLockRequested</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnNetworkError">OnNetworkError</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnOtherUserJoined">OnOtherUserJoined</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnOtherUserLeft">OnOtherUserLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnPacketRouted">OnPacketRouted</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnPacketSent">OnPacketSent</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnRoomJoined">OnRoomJoined</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnRoomLeft">OnRoomLeft</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnRoomListUpdated">OnRoomListUpdated</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_OnUnlocked">OnUnlocked</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_RefreshRoomList">RefreshRoomList</a></td>
<td>Refresh the AvailableRooms list containing the currently available Rooms on the server.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_RegisterRemoteProcedure">RegisterRemoteProcedure</a></td>
<td>Register a Remote Procedure.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_RegisterSynchronizable">RegisterSynchronizable</a></td>
<td>Register a Synchronizable to be synchronized through Alteruna Multiplayer.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_ReplyRemoteProcedure">ReplyRemoteProcedure</a></td>
<td>Reply to a Remote Procedure Called by another User.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_SendToBucket">SendToBucket</a></td>
<td>Synchronize a specific Synchronizable to all Users within a specific bucket.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_SetUsername">SetUsername</a></td>
<td>Sets new username if the user is not in a room.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_Start">Start</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_Sync">Sync(Guid, Reliability)</a></td>
<td>Synchronize a specific Synchronizable through Alteruna Multiplayer.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_Sync_1">Sync(Guid, List(UInt16), Reliability)</a></td>
<td>Synchronize a specific Synchronizable through Alteruna Multiplayer.</td></tr>
<tr>
<td><a href="M_Alteruna_Multiplayer_Update">Update</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_Multiplayer_ApplicationID">ApplicationID</a></td>
<td>The Application ID of this application.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_AvatarPrefab">AvatarPrefab</a></td>
<td>The prefab to spawn as an Avatar if SpawnAvatarOnJoin is true.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_AvatarSpawnLocation">AvatarSpawnLocation</a></td>
<td>The location at which to spawn Avatars.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_AvatarSpawnLocations">AvatarSpawnLocations</a></td>
<td>An indexed list of the locations at which to spawn Avatars.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_Buckets">Buckets</a></td>
<td>A list containing all of the existing Buckets in the application.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_Connected">Connected</a></td>
<td>Event invoked after successfully connecting to a server.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_Disconnected">Disconnected</a></td>
<td>Event invoked after disconnecting from a server.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_ForceSynced">ForceSynced</a></td>
<td>Event invoked when a Synchronizable is synced forcefully.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_LockAquired">LockAquired</a></td>
<td>Event invoked when a Synchronizable successfully recieves ownership.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_LockDenied">LockDenied</a></td>
<td>Event invoked when an attempt to gain ownership over a Synchronizable is denied.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_LockRequested">LockRequested</a></td>
<td>Event invoked when a Synchronizable requests ownership.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_LockUnlocked">LockUnlocked</a></td>
<td>Event invoked when a Synchronizable releases its ownership.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_LogLevel">LogLevel</a></td>
<td>The lowest level of logs to print to the console.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_MaxPlayers">MaxPlayers</a></td>
<td>The maximum amount of players allowed in a single Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_NetworkError">NetworkError</a></td>
<td>Event invoked if any network related errors occur.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_OtherUserJoined">OtherUserJoined</a></td>
<td>Event invoked after another User joined the Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_OtherUserLeft">OtherUserLeft</a></td>
<td>Event invoked after another User left the Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_PacketReceived">PacketReceived</a></td>
<td>Event invoked when a Synchronizable recieves data from another User.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_PacketSent">PacketSent</a></td>
<td>Event invoked when a Synchronizable sends its data.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_RoomJoined">RoomJoined</a></td>
<td>Event invoked after successfully joining a Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_RoomLeft">RoomLeft</a></td>
<td>Event invoked after successfully leaving a room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_RoomListUpdated">RoomListUpdated</a></td>
<td>Event invoked after the AvailableRooms list is updated by the server.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_SpawnAvatarOnJoin">SpawnAvatarOnJoin</a></td>
<td>Whether an Avatar should be spawned when joining a Room.</td></tr>
<tr>
<td><a href="F_Alteruna_Multiplayer_SpawnAvatarPerIndex">SpawnAvatarPerIndex</a></td>
<td>Weather Avatars should be spawned in different locations based on their index in the Room.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
