# AttributesSync Class


Synchronize methods and fields using attributes.



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class AttributesSync : CommunicationBridgeUID
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  <a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID</a>  →  AttributesSync</td></tr>
</table>



## Example
Here is how you can easily synchronize a field using attributes. There is a small performance overhead on using attributes instead of writing your own synchronizable. 

**C#**  
``` C#
public class MyAttributesSyncClass : AttributesSync
{
       [SynchronizableField]
       public string MyString;
}
```
 Unlike SynchronizableField, SynchronizableMethod have almost no overhead. They can be invoked in several ways. Parameters are easy to add, simply add them after the invocation method. Similar to how they are added in normal invocation. 

**C#**  
``` C#
public class PlayAudioSync : AttributesSync
{
    public void SendRpc()
    {
        // default target is index 0.
        BroadcastRemoteMethod(0, "Hello, world!");
    }

    // We define our synced method here.
    // As we only define one we know this one have index 0.
    [SynchronizableMethod]
    private void Message(string msg)
    {
        Debug.Log(msg);
    }
}
```


**C#**  
``` C#
public class PlayAudioSync : AttributesSync
{
    public AudioSource AudioSource;

    public void Play()
    {
        // default target is index 0.
        InvokeRemoteMethod();
        PlayRemote();
    }

    // We define our synced method here.
    // As we only define one we know this one have index 0.
    [SynchronizableMethod]
    private void PlayRemote()
    {
        AudioSource.Play();
    }
}
```
 Note that in InvokeRemoteMethod, the second argument is target(s) by ushort or ushort[].

## Constructors
<table>
<tr>
<td><a href="M_Alteruna_AttributesSync__ctor">AttributesSync</a></td>
<td> </td></tr>
</table>

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

## Fields
<table>
<tr>
<td><a href="F_Alteruna_AttributesSync_Reliability">Reliability</a></td>
<td>Chose how to send data. Reliable or Unreliable</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
