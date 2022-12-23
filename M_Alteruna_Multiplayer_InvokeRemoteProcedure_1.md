# InvokeRemoteProcedure(String, UInt16, ProcedureParameters, ISerializable, Reliability, RemoteProcedureReply, RemoteProcedureAck) Method


Invoke a Remote Procedure Call (RPC).



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public uint InvokeRemoteProcedure(
	string name,
	ushort toUserID,
	ProcedureParameters parameters = null,
	ISerializable userData = null,
	Reliability reliability = Reliability.Reliable,
	RemoteProcedureReply replyCallback = null,
	RemoteProcedureAck ackCallback = null
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the RPC to invoke.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a></dt><dd>The UserID of the User on which to call the procedure.</dd><dt>  <a href="T_Alteruna_ProcedureParameters">ProcedureParameters</a>  (Optional)</dt><dd>The parameters to be sent to the RPC.</dd><dt>  ISerializable  (Optional)</dt><dd>The user data to be sent to the RPC.</dd><dt>  Reliability  (Optional)</dt><dd>The reliability at which to invoke the RPC.</dd><dt>  <a href="T_Alteruna_RemoteProcedureReply">RemoteProcedureReply</a>  (Optional)</dt><dd>The callback gotten from the RPC.</dd><dt>  <a href="T_Alteruna_RemoteProcedureAck">RemoteProcedureAck</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>

## See Also


#### Reference
<a href="T_Alteruna_Multiplayer">Multiplayer Class</a>  
<a href="Overload_Alteruna_Multiplayer_InvokeRemoteProcedure">InvokeRemoteProcedure Overload</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
