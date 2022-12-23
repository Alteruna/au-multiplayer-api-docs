# InputSynchronizable Class


Synchronize inputs (255 buttons and 255 axis maximum) The input vales will update on this and other clients simultaneously. 

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




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public class InputSynchronizable : CommunicationBridge, 
	IInput
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Object  →  Component  →  Behaviour  →  MonoBehaviour  →  <a href="T_Alteruna_CommunicationBridge">CommunicationBridge</a>  →  InputSynchronizable</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Alteruna_IInput">IInput</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Alteruna_InputSynchronizable_AxesValues">AxesValues</a></td>
<td>Get synced axes values by index</td></tr>
<tr>
<td><a href="P_Alteruna_InputSynchronizable_KeyValues">KeyValues</a></td>
<td>Get synced button values by index</td></tr>
<tr>
<td><a href="P_Alteruna_InputSynchronizable_OnKeyUpdate">OnKeyUpdate</a></td>
<td>Event for changes in key inputs. passes <code>KeyCode</code> and state.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_AddAxis">AddAxis(String)</a></td>
<td>Add a axis to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_AddAxis_1">AddAxis(String[])</a></td>
<td>Add a array of axes to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_AddKey">AddKey(KeyCode)</a></td>
<td>Add a key to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_AddKey_1">AddKey(KeyCode[])</a></td>
<td>Add a array of keys to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_Awake">Awake</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_GetIndexOfAxis">GetIndexOfAxis</a></td>
<td>Get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist it returns <code>-1</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_GetIndexOfKey">GetIndexOfKey</a></td>
<td>Get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist it returns <code>-1</code></td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_TryGetIndexOfAxis">TryGetIndexOfAxis</a></td>
<td>Attempts to get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist, return <code>false</code> and <code>index</code> will be 0</td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_TryGetIndexOfKey">TryGetIndexOfKey</a></td>
<td>Attempts to get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist, return <code>false</code> and <code>index</code> will be 0</td></tr>
<tr>
<td><a href="M_Alteruna_InputSynchronizable_Update">Update</a></td>
<td> </td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Alteruna_InputSynchronizable_Avatar">Avatar</a></td>
<td>A reference to a avatar owner object.</td></tr>
<tr>
<td><a href="F_Alteruna_InputSynchronizable_UseLocalInput">UseLocalInput</a></td>
<td>Whether to use local input or use reply as input. When false, all clients including the sender will receive inputs simultaneously. (assuming identical connection)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
