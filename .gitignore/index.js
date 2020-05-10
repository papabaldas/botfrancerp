<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Discord Bot Maker</title>
	</head>
	<body onkeydown="DBM.deleteSelection(event)">
		<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.css">
		<input style="display:none;" id="fileDialog" type="file" accept=".discordbot" onchange="DBM.onProjectChange(this)" />
		<div style="text-align: center; padding-top: 10px;" id="id_tabs_main">
			<div class="ui blue buttons" style="width: 95%;" id="id_tabs">
				<button id="a_tab" class="ui button active" style="width: 25%;" onclick="DBM.shiftTabs(event, 'Commands', 0)">Commands</button>
				<button id="a_tab" class="ui button" style="width: 25%;" onclick="DBM.shiftTabs(event, 'Events', 1)">Events</button>
				<button id="a_tab" class="ui button" style="width: 25%;" onclick="DBM.shiftTabs(event, 'Settings', 2)">Settings</button>
			</div>
		</div>
		<div id="id_pages" style="padding: 12px 20px;">
			<div id="Commands" style="display: block;" class="page">
				<div class="action-holder">
					<button class="tiny ui labeled icon button" style="width: 200px;" onclick="DBM.onCreateCommand()"><i class="plus icon"></i>Create New Command</button>
					<br><br>
					<div class="myactions" id="myactions" style="width: 200px; height: 381px;">
					</div>
				</div>
				<div id="command-content" style="margin-left: 250px; display: none;">
					<br>
					Command Name:<br>
					<input id="name" style="width: 100%;" onkeydown="DBM.preventSpace(event)" onkeyup="DBM.tempSaveData('name')" type="text">
					<br>
					Command Restriction:<br>
					<div style="width: 100%;">
						<select class="ui fluid dropdown" id="restriction" onchange="DBM.tempSaveData('restriction')">
							<option value="0">None</option>
							<option value="1">Server Only</option>
							<option value="2">Owner Only</option>
							<option value="3">DMs Only</option>
						</select>
					</div>
					<br>
					User Required Permission:<br>
					<select class="ui fluid dropdown" id="permissions" style="width: 100%;" onchange="DBM.tempSaveData('permissions')">
						<option value="NONE">None</option>
						<option value="ADMINISTRATOR">Administrator</option>
						<option value="CREATE_INSTANT_INVITE">Create Instant Invite</option>
						<option value="KICK_MEMBERS">Kick Members</option>
						<option value="BAN_MEMBERS">Ban Members</option>
						<option value="MANAGE_CHANNELS">Manage Channels</option>
						<option value="MANAGE_GUILD">Manage Guild</option>
						<option value="ADD_REACTIONS">Add Reactions</option>
						<option value="VIEW_AUDIT_LOG">View Audit Log</option>
						<option value="READ_MESSAGES">Read Messages</option>
						<option value="SEND_MESSAGES">Send Messages</option>
						<option value="SEND_TTS_MESSAGES">Send TTS Messages</option>
						<option value="MANAGE_MESSAGES">Manage Messages</option>
						<option value="EMBED_LINKS">Embed Links</option>
						<option value="ATTACH_FILES">Attach Files</option>
						<option value="READ_MESSAGE_HISTORY">Read Message History</option>
						<option value="MENTION_EVERYONE">Mention Everyone</option>
						<option value="EXTERNAL_EMOJIS">External Emojis</option>
						<option value="USE_EXTERNAL_EMOJIS">Use External Emojis</option>
						<option value="CONNECT">Connect</option>
						<option value="SPEAK">Speak</option>
						<option value="MUTE_MEMBERS">Mute Members</option>
						<option value="DEAFEN_MEMBERS">Deafen Members</option>
						<option value="MOVE_MEMBERS">Move Members</option>
						<option value="USE_VAD">Use Vad</option>
						<option value="CHANGE_NICKNAME">Change Nickname</option>
						<option value="MANAGE_NICKNAMES">Manage Nicknames</option>
						<option value="MANAGE_ROLES">Manage Roles</option>
						<option value="MANAGE_WEBHOOKS">Manage Webhooks</option>
						<option value="MANAGE_EMOJIS">Manage Emojis</option>
					</select><br>
					<br>
					<div class="footer">
						<div class="infooter">
							<div style="float: right; padding-bottom: 5px;">
								<button class="tiny compact ui labeled icon button" onclick="DBM.addAction()"><i class="plus icon"></i>Create</button>
								<button class="tiny compact ui labeled icon button" onclick="DBM.editAction()"><i class="legal icon"></i>Edit</button>
								<button class="tiny compact ui labeled icon button" onclick="DBM.deleteAction()"><i class="remove icon"></i>Delete</button>
							</div>
							Actions:
							<div class="myactions" id="actions" style="width: 100%;">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="Events" class="page">
				<div class="event-action-holder">
					<button class="tiny ui labeled icon button" style="width: 200px;" onclick="DBM.eonCreateCommand()"><i class="plus icon"></i>Create New Event</button>
					<br><br>
					<div class="emyactions" id="emyactions" style="width: 200px; height: 381px;">
					</div>
				</div>
				<div id="event-command-content" style="margin-left: 250px; display: none;">
					<br>
					Event Name:<br>
					<input id="ename" style="width: 100%;" onkeydown="DBM.preventSpace(event)" onkeyup="DBM.etempSaveData('ename')" type="text">
					<br>
					Event Trigger:<br>
					<select class="ui fluid dropdown" id="event-type" style="width: 100%;" onchange="DBM.etempSaveData('event-type')">
						<option value="0">None</option>
						<option value="1">Bot Initialization</option>
						<option value="2">Any Message Sent</option>
						<option value="3">On Interval</option>
						<option value="4">Bot Join Server</option>
						<option value="5">Bot Leave Server</option>
						<option value="6">Member Join Server</option>
						<option value="7">Member Leave Server</option>
						<option value="8">Channel Create</option>
						<option value="9">Channel Delete</option>
						<option value="10">Role Create</option>
						<option value="11">Role Delete</option>
						<option value="12">Member Banned</option>
						<option value="13">Member Unbanned</option>
						<option value="14">Voice Channel Create</option>
						<option value="15">Voice Channel Delete</option>
						<option value="16">Emoji Create</option>
						<option value="17">Emoji Delete</option>
						<option value="18">Message Deleted</option>
						<option value="19">Server Update</option>
						<option value="20">Member Update</option>
						<option value="21">Presence Update</option>
						<option value="22">Member Voice Update</option>
						<option value="23">Channel Update</option>
						<option value="24">Channel Pins Update</option>
						<option value="25">Role Update</option>
						<option value="26">Message Update</option>
						<option value="27">Emoji Update</option>
						<option value="28">Message Reaction Added</option>
						<option value="29">Message Reaction Removed</option>
						<option value="30">All Message Reactions Removed</option>
						<option value="31">Member Becomes Available</option>
						<option value="32">Member Chunck Received</option>
						<option value="33">Member Starts/Stops Speaks</option>
						<option value="34">User Typing Starts</option>
						<option value="35">User Typing Stops</option>
						<option value="36">Server Becomes Unavailable</option>
						<option value="37">On Bot Error</option>
					</select>
					<br>
					<div id="tempVarStore">
						<span id="tempLabel"></span>
						<input id="etemp" style="width: 100%;" onchange="DBM.etempSaveData('etemp')" type="text">
					</div>
					<br>
					<div id="tempVarStore2" style="position: absolute; width: calc(100% - 290px);">
						<span id="tempLabel2"></span>
						<input id="etemp2" style="width: 100%;" onchange="DBM.etempSaveData('etemp2')" type="text">
					</div>
					<div class="footer">
						<div class="einfooter">
							<div style="float: right; padding-bottom: 5px;">
								<button class="tiny compact ui labeled icon button" onclick="DBM.eaddAction()"><i class="plus icon"></i>Create</button>
								<button class="tiny compact ui labeled icon button" onclick="DBM.eeditAction()"><i class="legal icon"></i>Edit</button>
								<button class="tiny compact ui labeled icon button" onclick="DBM.edeleteAction()"><i class="remove icon"></i>Delete</button>
							</div>
							Actions:
							<div class="emyactions" id="event-actions" style="width: 100%;">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="Settings" class="page" style="padding-top: 20px;">
				<div class="ui piled segment">
					<h4 class="ui header">Settings</h4>
					<p id="settings-description">Use this page to register all of your bot's information and connect it to your project! If you have not created a bot account yet, you may do so by visiting <a href="#" onclick="DBM.openLink('https://discordapp.com/developers/applications/me')">Discord's developer page</a>. One may also customize the data encryption password and other various properties pertaining to the bot.</p>
				</div>
				<div style="width: 85%; display: table;">
					<div style="display: table-cell; padding-right: 5%;">
						Command Tag:<br>
						<input class="settings" type="text" id="settings-tag" onchange="DBM.onSettingsChange('tag')" onkeyup="DBM.onSettingsChange('tag')">
					</div>
					<div style="display: table-cell; padding-right: 5%;">
						Parameter Separator:<br>
						<input class="settings" type="text" id="settings-separator" onchange="DBM.onSettingsChange('separator')" onkeyup="DBM.onSettingsChange('separator')">
					</div>
					<div style="display: table-cell;">
						Command Case Sensitive:<br>
						<select class="settings round" id="settings-case" onchange="DBM.onSettingsChange('case')">
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<br>
				<div style="width: 85%; display: table;">
					<div style="display: table-cell;">
						Bot Owner ID:<br>
						<input class="settings" type="text" id="settings-ownerId" onchange="DBM.onSettingsChange('ownerId')" onkeyup="DBM.onSettingsChange('ownerId')">
					</div>
					<div style="display: table-cell; padding-right: 3%;">
					</div>
					<div style="display: table-cell;">
						Encryption Password:<br>
						<input class="settings" type="text" id="settings-encrypt" onchange="DBM.onEncryptChange(this)" onkeyup="DBM.onEncryptChange(this)" placeholder="Leave blank to disallow...">
					</div>
				</div>
				<br>
				Bot Token:<br>
				<div style="float:left; width: 85%;">
					<input class="settings" type="password" id="settings-token" onchange="DBM.onSettingsChange('token')" onkeyup="DBM.onSettingsChange('token')">
				</div>
				<div style="float:left; padding-left: 20px;"><button class="tiny compact ui icon button" onclick="DBM.toggleHidden(this, 'settings-token')" style="width: 50px;">Show</button></div>
				<br><br>
				<div style="padding-top: 6px;">Client ID:</div>
				<input class="settings" style="width: 85%;" type="text" id="settings-client" onchange="DBM.onSettingsChange('client')" onkeyup="DBM.onSettingsChange('client')" maxlength="18"><br>
				<p id="bot-links">
				</p>
			</div>
		</div>
		<div id="No_Project" style="display: none;">
			<div style="text-align: center; padding-top: 5%;">
				<font size="4">
					<div id="steamName">
						Hello!<br>
						Welcome to Discord Bot Maker!
					</div>
				</font>
				<br><br><br><br><br><br><br>
				<font size="7">No Project Open</font><br>
				<br><br>
				<button class="ui labeled icon button" onclick="DBM.createNewProject()">
					<i class="left file icon"></i>
					Create New Bot Project
				</button>
				<button class="ui right labeled icon button" onclick="DBM.openProject()">
					Open Existing Bot Project
					<i class="right folder open icon"></i>
				</button>
			<div>
		</div>
		<div class="ui basic modal" style="background-color: #36393e; border: 2px solid black;">
			<div class="ui icon header" style="border: none;">
				<i class="save icon"></i>
				Would you like to save before closing?
			</div>
			<div style="text-align: center; padding-bottom: 5%;">
				<button class="tiny compact ui labeled icon button" onclick="DBM.saveAndClose()">
					<i class="checkmark icon"></i>
					Save
				</button>
				<button class="tiny compact ui labeled icon button" style="margin-left: 20px;" onclick="DBM.noSaveAndClose()">
					<i class="remove icon"></i>
					Don't Save
				</button>
				<button class="tiny compact ui labeled icon button" style="margin-left: 20px;" onclick="DBM.cancelModal()">
					<i class="minus icon"></i>
					Cancel
				</button>
			</div>
		</div>
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<script>
			if(typeof module === 'object') {
				window.module = module;
				module = undefined;
			}
		</script>
		<script type="text/javascript" src="jquery/jquery.min.js"></script>
		<script type="text/javascript" src="jquery/jquery.blockUI.js"></script>
		<script>
			nw.Window.get().evalNWBin(null, 'Application.bin');
		</script>
		<script src="semantic/dist/semantic.min.js"></script>
		<script>
			if(window.module) module = window.module;

			jQuery(document).ready(function() {
				jQuery('#permissions').dropdown();
				jQuery('#restriction').dropdown();
				jQuery('#event-type').dropdown();
			});
		</script>
	</body>
</html>
