# Synchronizable Class


Class `Synchronizable` defines a base containing data to be synchronized with other clients in the Room. Synchronizable also support attributes, but unlike `AttributesSync`, it does not auto commit changes in fields marked with the



## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public abstract class Synchronizable : CommunicationBridgeUID
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  <a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID</a>  →  Synchronizable</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Alteruna_InterpolationTransformSynchronizable">Alteruna.InterpolationTransformSynchronizable</a><br /><a href="T_Alteruna_Rigidbody2DSynchronizable">Alteruna.Rigidbody2DSynchronizable</a><br /><a href="T_Alteruna_RigidbodySynchronizable">Alteruna.RigidbodySynchronizable</a><br /><a href="T_Alteruna_TransformSynchronizable">Alteruna.TransformSynchronizable</a></td></tr>
</table>



## Example
Synchronizables are automatically assigned a unique global identifier (UniqueID) when they are first created. This ensures that all application instances can always identify the correct object to synchronize and prevent collisions. You can inspect the assigned UniqueID in the inspector window for all objects that have Synchronizable components attached to them. Alteruna Multiplayer supports synchronization of virtually any data type or user-defined class as long as they can be serialized as a stream of bytes. Alteruna Multiplayer provides a framework for reading and writing the most common primitive data types in C#. It does support sending a series of bytes which open up for more complex data types to be synchronized as well. Here is a detailed example of a Synchronizable. 

**C#**  
``` C#
public class ExampleSynchronizable : Synchronizable
   {
       // Data to be synchronized with other players in our playroom.
       public float SynchronizedFloat = 3.0f;

       // Used to store the previous version of our data so that we know when it has changed.
       private float _oldSynchronizedFloat;

       public override void DisassembleData(Reader reader, byte LOD)
       {
           // Set our data to the updated value we have recieved from another player.
           SynchronizedFloat = reader.ReadFloat();

           // Save the new data as our old data, otherwise we will immediatly think it changed again.
           _oldSynchronizedFloat = SynchronizedFloat;
       }

       public override void AssembleData(Writer writer, byte LOD)
       {
           // Write our data so that it can be sent to the other players in our playroom.
           writer.Write(SynchronizedFloat);
       }

       private void Update()
       {
           // If the value of our float has changed, sync it with the other players in our playroom.
           if (SynchronizedFloat != _oldSynchronizedFloat)
           {
               // Store the updated value
               _oldSynchronizedFloat = SynchronizedFloat;

               // Tell Alteruna Multiplayer that we want to commit our data.
               Commit();
           }

           // Update the Synchronizable
           base.SyncUpdate();
       }
    }
```


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

## Fields
<table>
<tr>
<td><a href="F_Alteruna_Synchronizable_BucketBehaviors">BucketBehaviors</a></td>
<td>A list of Bucket Behaviors describing how this Synchronizable is syncrhonized depending on which Bucket it is being sent to.</td></tr>
<tr>
<td><a href="F_Alteruna_Synchronizable_MAX_LOD">MAX_LOD</a></td>
<td>The highest NetLOD value a Synchronizable can have.</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
<a href="T_Alteruna_AttributesSync">AttributesSync</a>  
