filter "*.svg"
replace "fill="#145DBF""
with "fill={this.props.theme.sidebarBg}"

replace "fill="white""
with "fill={this.props.theme.centerChannelBg}"

replace "fill="#1153AB""
with "fill={this.props.theme.sidebarHeaderBg}"

replace "fill="#06D6A0""
with "fill={this.props.theme.onlineIndicator}"

replace "fill="#FFBC42""
with "fill={this.props.theme.awayIndicator}"

replace "fill="#F74343""
with "fill={this.props.theme.dndIndicator}"

replace "fill="#3D3C40""
with "fill={this.props.theme.centerChannelText}"

replace "fill="#FF8800""
with "fill={this.props.theme.newMessageSeparator}"

replace "fill="#FD5960""
with "fill={this.props.theme.errorTextColor}"

replace "fill="#FFE577""
with "fill={this.props.theme.mentionHighlightBg}"

replace "fill="#166DE0""
with "fill={this.props.theme.buttonBg}"

replace "fill="#2389D7""
with "fill={this.props.theme.linkColor}"