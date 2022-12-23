# MulticastRemoteProcedure Method




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public uint MulticastRemoteProcedure(
	string name,
	List<ushort> toUsers,
	ProcedureParameters parameters = null,
	ISerializable userData = null,
	Reliability reliability = Reliability.Reliable,
	RemoteProcedureReply replyCallback = null,
	RemoteProcedureAck ackCallback = null
)
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">List</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint16" target="_blank" rel="noopener noreferrer">UInt16</a>)</dt><dd> </dd><dt>  <a href="T_Alteruna_ProcedureParameters">ProcedureParameters</a>  (Optional)</dt><dd> </dd><dt>  ISerializable  (Optional)</dt><dd> </dd><dt>  Reliability  (Optional)</dt><dd> </dd><dt>  <a href="T_Alteruna_RemoteProcedureReply">RemoteProcedureReply</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Alteruna_RemoteProcedureAck">RemoteProcedureAck</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>

## See Also


#### Reference
<a href="T_Alteruna_ServiceState">ServiceState Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
