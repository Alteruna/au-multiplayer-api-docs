# Multiplayer Methods




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

## See Also


#### Reference
<a href="T_Alteruna_Multiplayer">Multiplayer Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
