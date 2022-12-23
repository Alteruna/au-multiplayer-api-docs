# AttributesSync Methods




## Methods
<table>
<tr>
<td><a href="M_Alteruna_AttributesSync_BroadcastRemoteMethod">BroadcastRemoteMethod(Int32, Object[])</a></td>
<td>Calls method with the <code>SynchronizableMethod</code> attribute on evey client including sender with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_BroadcastRemoteMethod_1">BroadcastRemoteMethod(String, Object[])</a></td>
<td>Calls method with the <code>SynchronizableMethod</code> attribute on evey client including sender with given parameters. with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_Commit">Commit</a></td>
<td>Send all changes to all users.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_GetMethodAttributeId">GetMethodAttributeId</a></td>
<td>Get index of method with the <code>SynchronizableMethod</code> attribute by name.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_GetMethodAttributeName">GetMethodAttributeName</a></td>
<td>Get name of method with the <code>SynchronizableMethod</code> attribute by index.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_InvokeRemoteMethod">InvokeRemoteMethod(Int32, List(UInt16), Object[])</a></td>
<td>Invoke a method with the <code>SynchronizableMethod</code> attribute on target users with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_InvokeRemoteMethod_1">InvokeRemoteMethod(Int32, UInt16, Object[])</a></td>
<td>Invoke a method with the <code>SynchronizableMethod</code> attribute on target user with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_InvokeRemoteMethod_2">InvokeRemoteMethod(String, List(UInt16), Object[])</a></td>
<td>Invoke a method with the <code>SynchronizableMethod</code> attribute on target users with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_InvokeRemoteMethod_3">InvokeRemoteMethod(String, UInt16, Object[])</a></td>
<td>Invoke a method with the <code>SynchronizableMethod</code> attribute on target user with given parameters.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_LateUpdate">LateUpdate</a></td>
<td>Handle changes fields.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_Serialize">Serialize</a></td>
<td>Write changes to a <code>ITransportStreamWriter</code> processor.<br />(Overrides <a href="M_Alteruna_CommunicationBridgeUID_Serialize">CommunicationBridgeUID.Serialize(ITransportStreamWriter, Byte)</a>)</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_UncommittedFields">UncommittedFields</a></td>
<td>Check if there is any uncommitted changes to any fields.</td></tr>
<tr>
<td><a href="M_Alteruna_AttributesSync_Unserialize">Unserialize</a></td>
<td>Read changes from a <code>ITransportStreamReader</code> processor.<br />(Overrides <a href="M_Alteruna_CommunicationBridgeUID_Unserialize">CommunicationBridgeUID.Unserialize(ITransportStreamReader, Byte, UInt32)</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="T_Alteruna_AttributesSync">AttributesSync Class</a>  
<a href="N_Alteruna">Alteruna Namespace</a>  
