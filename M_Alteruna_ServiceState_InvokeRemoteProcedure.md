# InvokeRemoteProcedure(String, UserId, ProcedureParameters, ISerializable, Reliability, RemoteProcedureReply, RemoteProcedureAck) Method




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public uint InvokeRemoteProcedure(
	string name,
	UserId toUserID,
	ProcedureParameters parameters = null,
	ISerializable userData = null,
	Reliability reliability = Reliability.Reliable,
	RemoteProcedureReply replyCallback = null,
	RemoteProcedureAck ackCallback = null
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Alteruna_UserId">UserId</a></dt><dd> </dd><dt>  <a href="T_Alteruna_ProcedureParameters">ProcedureParameters</a>  (Optional)</dt><dd> </dd><dt>  ISerializable  (Optional)</dt><dd> </dd><dt>  Reliability  (Optional)</dt><dd> </dd><dt>  <a href="T_Alteruna_RemoteProcedureReply">RemoteProcedureReply</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Alteruna_RemoteProcedureAck">RemoteProcedureAck</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>

## See Also


#### Reference
<a href="T_Alteruna_ServiceState">ServiceState Class</a>  
<a href="Overload_Alteruna_ServiceState_InvokeRemoteProcedure">InvokeRemoteProcedure Overload</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
