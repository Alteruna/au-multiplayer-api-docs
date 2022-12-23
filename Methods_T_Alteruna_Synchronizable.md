# Synchronizable Methods




## Methods
<table>
<tr>
<td><a href="M_Alteruna_Synchronizable_AssembleData">AssembleData</a></td>
<td>Called by the <code>SynchronizableManager</code> after Commit() to collect the data to be synced before sending it.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_BroadcastRemoteMethod">BroadcastRemoteMethod(Int32, Object[])</a></td>
<td>Commits method with the <code>SynchronizableMethod</code> attribute on evey client including sender with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_BroadcastRemoteMethod_1">BroadcastRemoteMethod(String, Object[])</a></td>
<td>Commits method with the <code>SynchronizableMethod</code> attribute on evey client including sender with given parameters. with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_Commit">Commit</a></td>
<td>This method informs the <code>SynchronizableManager</code> that this synchronizable has new data that needs to be synced.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_DisassembleData">DisassembleData</a></td>
<td>Called by the <code>SynchronizableManager</code> after recieving new data to be synced with this <code>Synchronizable</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_GetMethodAttributeId">GetMethodAttributeId</a></td>
<td>Get id of method with the <code>SynchronizableMethod</code> attribute by name.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_GetMethodAttributeName">GetMethodAttributeName</a></td>
<td>Get name of method with the <code>SynchronizableMethod</code> attribute by index.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_InvokeRemoteMethod">InvokeRemoteMethod(Int32, Object[])</a></td>
<td>Commits method with the <code>SynchronizableMethod</code> attribute on evey client excluding sender with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_InvokeRemoteMethod_1">InvokeRemoteMethod(String, Object[])</a></td>
<td>Commits method with the <code>SynchronizableMethod</code> attribute on evey client excluding sender with given parameters. with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_Serialize">Serialize</a></td>
<td>Serialize Synchronizable.<br />(Overrides <a href="M_Alteruna_CommunicationBridgeUID_Serialize">CommunicationBridgeUID.Serialize(ITransportStreamWriter, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_SyncUpdate">SyncUpdate</a></td>
<td>Update the internals of the <code>Synchronizable</code>.</td></tr>
<tr>
<td><a href="M_Alteruna_Synchronizable_Unserialize">Unserialize</a></td>
<td>Unserialize Synchronizable.<br />(Overrides <a href="M_Alteruna_CommunicationBridgeUID_Unserialize">CommunicationBridgeUID.Unserialize(ITransportStreamReader, Byte, UInt32)</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="T_Alteruna_Synchronizable">Synchronizable Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
