# Alteruna Namespace


Primary namespace for Alteruna Multiplayer



## Classes
<table>
<tr>
<td><a href="T_Alteruna_AttributesSync">AttributesSync</a></td>
<td>Synchronize methods and fields using attributes.</td></tr>
<tr>
<td><a href="T_Alteruna_AttributesSync_SynchronizableField">AttributesSync.SynchronizableField</a></td>
<td>Synchronise target field.</td></tr>
<tr>
<td><a href="T_Alteruna_AttributesSync_SynchronizableMethod">AttributesSync.SynchronizableMethod</a></td>
<td>Synchronise target Method.</td></tr>
<tr>
<td><a href="T_Alteruna_Avatar">Avatar</a></td>
<td><code>Avatar</code> is used to represent a player in a Room. 

## Example
Avatars have events that can be used similar to OnEnable and OnDisable. The possession status can also be accessed with <code>Avatar.IsPossessed</code>

**C#**  
``` C#
// Avatar reference
public Avatar MyAvatar;

void Awake() {
    // Event for avatar possessed
    MyAvatar.OnPossessed.AddListener(Possessed);

    // OnUnpossessed is called on unposses and client disconnect.
}

// Log username on Possession
void Possessed(User user) => Debug.Log("Possessed by " + user.Name);
```
 When working with Avatars, the most useful information is to check for the controlled Avatar, this can be done using <code>Avatar.IsMe</code>. To make a fist person game, simply move the camera to the avatar with the <code>Avatar.IsMe</code> set to true. See following example. 

**C#**  
``` C#
public Avatar MyAvatar;

void Awake() {
    MyAvatar.OnPossessed.AddListener(Possessed);
}

void Possessed(User user) {
    // Return if not user's client.
    if (!user.IsMe) return;

    // Set camera as child to object
    Camera myCamera = Camera.main;
    myCamera.transform.position = transform.position + new Vector3(0, 0.4f, 0);
    myCamera.transform.SetParent(transform);

    // Lock cursor
    Cursor.lockState = CursorLockMode.Locked;
    Cursor.visible = false;
}
```
</td></tr>
<tr>
<td><a href="T_Alteruna_Bucket">Bucket</a></td>
<td>Class <code>Bucket</code> is a collection of players used to define NetLOD behaviour.</td></tr>
<tr>
<td><a href="T_Alteruna_BucketBehavior">BucketBehavior</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_CommunicationBridgeUID">CommunicationBridgeUID</a></td>
<td>Holds references and methods for communications with active <code>Multiplayer</code> and <code>UID</code> components.</td></tr>
<tr>
<td><a href="T_Alteruna_Encryption">Encryption</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_Endpoint">Endpoint</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_InputSynchronizable">InputSynchronizable</a></td>
<td>Synchronize inputs (255 buttons and 255 axis maximum) The input vales will update on this and other clients simultaneously. 

## Example
Sync inputs and move transform based on those inputs. Note that this does not sync position, after a while the positions could become unsynced. 

**C#**  
``` C#
using UnityEngine;
using Alteruna;

public class SyncedPlayerMovement : MonoBehaviour
{
    //reference to a InputSynchronizable object in the scene with a avatar.
    public InputSynchronizable InputSync;
    public float Speed = 5;

    private void Start() {
        InputSync.AddAxis(new[] {"Horizontal", "Vertical"});
    }

    private void Update() {
        float scaledSpeed = Speed * Time.deltaTime;
        transform.Translate(
            scaledSpeed * InputSync.AxesValues[0],
            scaledSpeed * InputSync.AxesValues[1],
            0);
    }
 }
```
</td></tr>
<tr>
<td><a href="T_Alteruna_InterpolationTransformSynchronizable">InterpolationTransformSynchronizable</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_Multiplayer">Multiplayer</a></td>
<td>The component <code>Multiplayer</code> gives access to all functionality and communication for Alteruna Multiplayer.</td></tr>
<tr>
<td><a href="T_Alteruna_NameGenerator">NameGenerator</a></td>
<td>Class <code>NameGenerator</code> generates names from a random animal and adjective.</td></tr>
<tr>
<td><a href="T_Alteruna_ProcedureParameters">ProcedureParameters</a></td>
<td>Parameters containing data to be sent together with Remote Procedure Calls.</td></tr>
<tr>
<td><a href="T_Alteruna_Reader">Reader</a></td>
<td>Class <code>Writer</code> is used to write data to be sent to other Users through a <code>Synchronizable</code>.</td></tr>
<tr>
<td><a href="T_Alteruna_Rigidbody2DSynchronizable">Rigidbody2DSynchronizable</a></td>
<td><code>Rigidbody2DSynchronizable</code> is a <code>Synchronizable</code> that synchronizes the state of a <code>Rigidbody2D</code> component.</td></tr>
<tr>
<td><a href="T_Alteruna_RigidbodySynchronizable">RigidbodySynchronizable</a></td>
<td><code>RigidbodySynchronizable</code> is a <code>Synchronizable</code> that synchronizes the state of a <code>Rigidbody</code> component.</td></tr>
<tr>
<td><a href="T_Alteruna_Room">Room</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_Service">Service</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_ServiceState">ServiceState</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_Spawner">Spawner</a></td>
<td>Class <code>Spawner</code> defines a component which can instantiate and destrot objects on all clients in the Room simultaneously.</td></tr>
<tr>
<td><a href="T_Alteruna_SyncedAxis">SyncedAxis</a></td>
<td>Alternative way of implementing <code>InputSynchronizable</code>.</td></tr>
<tr>
<td><a href="T_Alteruna_SyncedKey">SyncedKey</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_Synchronizable">Synchronizable</a></td>
<td>Class <code>Synchronizable</code> defines a base containing data to be synchronized with other clients in the Room. Synchronizable also support attributes, but unlike <code>AttributesSync</code>, it does not auto commit changes in fields marked with the</td></tr>
<tr>
<td><a href="T_Alteruna_Synchronizable_SynchronizableField">Synchronizable.SynchronizableField</a></td>
<td>Synchronise target field.</td></tr>
<tr>
<td><a href="T_Alteruna_Synchronizable_SynchronizableMethod">Synchronizable.SynchronizableMethod</a></td>
<td>Synchronise target Method.</td></tr>
<tr>
<td><a href="T_Alteruna_TransformSynchronizable">TransformSynchronizable</a></td>
<td>Class <code>TransformSynchronizable</code> defines a component which synchronizes its gameobjects transform with other clients in the Playroom.</td></tr>
<tr>
<td><a href="T_Alteruna_UniqueAvatarChild">UniqueAvatarChild</a></td>
<td>Instantiate a prefab as a child from a array. If avatar index goes beyond the lenght of the array, it will loop.</td></tr>
<tr>
<td><a href="T_Alteruna_UniqueAvatarColor">UniqueAvatarColor</a></td>
<td>Change Hue to a unique color based on avatar index.</td></tr>
<tr>
<td><a href="T_Alteruna_UniqueID">UniqueID</a></td>
<td>Class <code>UniqueID</code> defines an application-wide unique ID for identifying objects to be synced between Users in a Room.</td></tr>
<tr>
<td><a href="T_Alteruna_UnityLog">UnityLog</a></td>
<td>Class <code>UnityLog</code> is responsible for logging internal messages and events.</td></tr>
<tr>
<td><a href="T_Alteruna_UnityReader">UnityReader</a></td>
<td>Class <code>UnityReader</code> is used to write Unity types to a <code>Reader</code>.</td></tr>
<tr>
<td><a href="T_Alteruna_UnityWriter">UnityWriter</a></td>
<td>Class <code>UnityWriter</code> is used to write Unity types to a <code>Writer</code>.</td></tr>
<tr>
<td><a href="T_Alteruna_User">User</a></td>
<td>User class containing index and name.</td></tr>
<tr>
<td><a href="T_Alteruna_UtcTime">UtcTime</a></td>
<td>Useful time related fields using global time. Note that its its common for the system time to be inaccurate, expect a difference by 5 seconds. If the machine time is not automatically updated, it can be up to much more.</td></tr>
<tr>
<td><a href="T_Alteruna_Writer">Writer</a></td>
<td>Class <code>Reader</code> is used to read data recieved from another User.</td></tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Alteruna_IInput">IInput</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_IServiceListener">IServiceListener</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_IServiceStateListener">IServiceStateListener</a></td>
<td> </td></tr>
</table>

## Delegates
<table>
<tr>
<td><a href="T_Alteruna_RemoteProcedure">RemoteProcedure</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_RemoteProcedureAck">RemoteProcedureAck</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_RemoteProcedureReply">RemoteProcedureReply</a></td>
<td> </td></tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Alteruna_InterpolationTransformSynchronizable_InterpolationMethodType">InterpolationTransformSynchronizable.InterpolationMethodType</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_InterpolationTransformSynchronizable_LocalBehaviourType">InterpolationTransformSynchronizable.LocalBehaviourType</a></td>
<td> </td></tr>
<tr>
<td><a href="T_Alteruna_SyncedKey_KeyMode">SyncedKey.KeyMode</a></td>
<td>Key behavior mode</td></tr>
<tr>
<td><a href="T_Alteruna_UserId">UserId</a></td>
<td>User Indexes to target multiple users.</td></tr>
</table>