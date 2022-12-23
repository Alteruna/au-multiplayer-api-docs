# IInput Interface




## Definition
**Namespace:** <a href="N_Alteruna">Alteruna</a>  
**Assembly:** Alteruna.Trinity (in Alteruna.Trinity.dll) Version: 1.1.6

**C#**
``` C#
public interface IInput
```



## Properties
<table>
<tr>
<td><a href="P_Alteruna_IInput_AxesValues">AxesValues</a></td>
<td>Get synced axes values by index</td></tr>
<tr>
<td><a href="P_Alteruna_IInput_KeyValues">KeyValues</a></td>
<td>Get synced button values by index</td></tr>
<tr>
<td><a href="P_Alteruna_IInput_OnKeyUpdate">OnKeyUpdate</a></td>
<td>Event for changes in key inputs. passes <code>KeyCode</code> and state.</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Alteruna_IInput_AddAxis">AddAxis(String)</a></td>
<td>Add a axis to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_AddAxis_1">AddAxis(String[])</a></td>
<td>Add a array of axes to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_AddKey">AddKey(KeyCode)</a></td>
<td>Add a key to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_AddKey_1">AddKey(KeyCode[])</a></td>
<td>Add a array of keys to the <code>InputSynchronizable</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_GetIndexOfAxis">GetIndexOfAxis</a></td>
<td>Get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist it returns <code>-1</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_GetIndexOfKey">GetIndexOfKey</a></td>
<td>Get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist it returns <code>-1</code></td></tr>
<tr>
<td><a href="M_Alteruna_IInput_TryGetIndexOfAxis">TryGetIndexOfAxis</a></td>
<td>Attempts to get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist, return <code>false</code> and <code>index</code> will be 0</td></tr>
<tr>
<td><a href="M_Alteruna_IInput_TryGetIndexOfKey">TryGetIndexOfKey</a></td>
<td>Attempts to get index of a registered <code>keyCode</code>. If the target <code>keyCode</code> dos not exist, return <code>false</code> and <code>index</code> will be 0</td></tr>
</table>

## See Also


#### Reference
<a href="N_Alteruna">Alteruna Namespace</a>  
