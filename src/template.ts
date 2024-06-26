import { alpha, generateColorPalette } from './helpers';
import { Theme } from './types';

export const uiTemplate = ({ name, baseVariant, variant }: Theme) => {
	const {
		basePalette,
		colorPalette,
		lightColorPalette,
		primaryBgColor: primaryBackgroundColor,
		secondaryBgColor: secondaryBackgroundColor,
	} = generateColorPalette();
	function getBaseColor(defaultColor: string): string {
		return defaultColor;
	}

	return {
		name: name,
		type: 'dark',
		colors: {
			// Base
			focusBorder: alpha(basePalette.selection, 0.5),
			foreground: basePalette.foreground,
			'widget.shadow': basePalette.shadow,
			'selection.background': alpha(basePalette.selection, 0.7),
			descriptionForeground: basePalette.foreground,
			errorForeground: colorPalette.red,

			// Editor Group
			'editorGroup.border': basePalette.selection,
			'editorGroup.dropBackground': basePalette.selection,
			'editorGroup.emptyBackground': primaryBackgroundColor,
			'editorGroup.focusedEmptyBorder': primaryBackgroundColor,
			'editorGroupHeader.noTabsBackground': primaryBackgroundColor,
			'editorGroupHeader.tabsBackground': secondaryBackgroundColor,
			'editorGroupHeader.border': primaryBackgroundColor,
			'editorGroupHeader.tabsBorder': primaryBackgroundColor,

			// Editor
			'editorPane.background': primaryBackgroundColor,
			'editor.background': primaryBackgroundColor,
			'editor.foreground': basePalette.foreground,
			'editor.selectionBackground': alpha(colorPalette.blue, 0.6),
			'editor.selectionForeground': basePalette.foreground,
			'editor.inactiveSelectionBackground': alpha(basePalette.selection, 0.6),
			'editor.selectionHighlightBackground': alpha(basePalette.selection, 0.6),
			'editor.wordHighlightBackground': alpha(basePalette.selection, 0.6),
			'editor.wordHighlightStrongBackground': alpha(basePalette.selection, 0.8),
			'editor.findMatchBackground': alpha(basePalette.selection, 0.5),
			'editor.findMatchHighlightBackground': alpha(basePalette.selection, 0.5),
			'editor.findRangeHighlightBackground': alpha(basePalette.selection, 0.5),
			'editor.findMatchBorder': colorPalette.blue,
			'editor.hoverHighlightBackground': alpha(basePalette.selection, 0.5),
			'editor.lineHighlightBackground': alpha(basePalette.selection, 0.5),
			'editor.lineHighlightBorder': alpha(basePalette.selection, 0.5),
			'editor.rangeHighlightBackground': alpha(basePalette.selection, 0.5),
			'editorLineNumber.foreground': getBaseColor(basePalette.textMid),
			'editorLineNumber.activeForeground': basePalette.foreground,
			'editorCursor.background': primaryBackgroundColor,
			'editorCursor.foreground': colorPalette[variant],
			'editorLink.activeForeground': colorPalette.blue,
			'editorWhitespace.foreground': alpha(basePalette.selection, 0.5),
			'editorIndentGuide.background': basePalette.selectionDark,
			'editorIndentGuide.activeBackground': colorPalette[variant],
			'editorInlayHint.background': primaryBackgroundColor,
			'editorInlayHint.foreground': alpha(basePalette.selection, 0.99),
			'editorRuler.foreground': basePalette.selection,
			'editorCodeLens.foreground': basePalette.foreground,
			'editorBracketMatch.background': alpha(basePalette.selection, 0.6),
			'editorBracketMatch.border': colorPalette.blue,

			// Editor Overview Ruler
			'editorOverviewRuler.border': basePalette.selection,
			'editorOverviewRuler.findMatchForeground': colorPalette.blue,
			'editorOverviewRuler.rangeHighlightForeground': basePalette.selection,
			'editorOverviewRuler.selectionHighlightForeground': alpha(basePalette.selection, 0.5),
			'editorOverviewRuler.wordHighlightForeground': basePalette.selection,
			'editorOverviewRuler.wordHighlightStrongForeground': basePalette.selection,
			'editorOverviewRuler.modifiedForeground': colorPalette.blue,
			'editorOverviewRuler.addedForeground': colorPalette.peridot,
			'editorOverviewRuler.deletedForeground': colorPalette.red,
			'editorOverviewRuler.errorForeground': colorPalette.red,
			'editorOverviewRuler.warningForeground': colorPalette.orange,
			'editorOverviewRuler.infoForeground': colorPalette.blue,
			'editorOverviewRuler.bracketMatchForeground': colorPalette.blue,
			'editorOverviewRuler.currentContentForeground': colorPalette.blue,
			'editorOverviewRuler.incomingContentForeground': colorPalette.peridot,
			'editorOverviewRuler.commonContentForeground': basePalette.selection,

			// Editor Widget
			'editorWidget.background': primaryBackgroundColor,
			'editorWidget.border': primaryBackgroundColor,
			'editorWidget.foreground': basePalette.foreground,
			'editorSuggestWidget.background': primaryBackgroundColor,
			'editorSuggestWidget.border': basePalette.selection,
			'editorSuggestWidget.foreground': basePalette.foreground,
			'editorSuggestWidget.highlightForeground': colorPalette.blue,
			'editorSuggestWidget.selectedBackground': basePalette.selection,
			'editorHoverWidget.background': primaryBackgroundColor,
			'editorHoverWidget.border': basePalette.selection,
			'debugExceptionWidget.background': primaryBackgroundColor,
			'debugExceptionWidget.border': basePalette.selection,

			// Editor Marker Navigation
			'editorMarkerNavigation.background': primaryBackgroundColor,
			'editorMarkerNavigationError.background': colorPalette.red,
			'editorMarkerNavigationWarning.background': colorPalette.orange,
			'editorMarkerNavigationInfo.background': colorPalette.blue,

			// Diff Editor
			'diffEditor.insertedTextBackground': alpha(colorPalette.peridot, 0.22),
			'diffEditor.insertedTextBorder': alpha(colorPalette.peridot, 0.44),
			'diffEditor.removedTextBackground': alpha(colorPalette.red, 0.22),
			'diffEditor.removedTextBorder': alpha(colorPalette.red, 0.44),
			'diffEditor.border': basePalette.selection,

			// Editor Error
			'editorError.foreground': colorPalette.red,
			'editorWarning.foreground': colorPalette.orange,
			'editorInfo.foreground': colorPalette.blue,
			'editorHint.foreground': colorPalette.cyan,

			// Editor Gutter
			'editorGutter.background': primaryBackgroundColor,
			'editorGutter.modifiedBackground': colorPalette.blue,
			'editorGutter.addedBackground': colorPalette.peridot,
			'editorGutter.deletedBackground': colorPalette.red,

			// Text
			'textBlockQuote.background': basePalette.selection,
			'textBlockQuote.border': basePalette.selection,
			'textCodeBlock.background': primaryBackgroundColor,
			'textLink.activeForeground': colorPalette[variant],
			'textLink.foreground': colorPalette[variant],
			'textPreformat.foreground': basePalette.foreground,
			'textSeparator.foreground': basePalette.foreground,

			// Button
			'button.background': colorPalette[variant],
			'button.foreground': primaryBackgroundColor,
			'button.hoverBackground': alpha(colorPalette[variant], 0.99),

			// Dropdown
			'dropdown.background': basePalette.selection,
			'dropdown.listBackground': primaryBackgroundColor,
			'dropdown.border': basePalette.selection,
			'dropdown.foreground': basePalette.foreground,

			// Input
			'input.background': primaryBackgroundColor,
			'input.border': basePalette.selection,
			'input.foreground': basePalette.foreground,
			'input.placeholderForeground': alpha(basePalette.selection, 0.5),
			'inputOption.activeBorder': basePalette.selection,

			// Input Validation
			'inputValidation.errorBackground': primaryBackgroundColor,
			'inputValidation.errorForeground': colorPalette.red,
			'inputValidation.errorBorder': colorPalette.red,
			'inputValidation.infoBackground': primaryBackgroundColor,
			'inputValidation.infoForeground': colorPalette.blue,
			'inputValidation.infoBorder': colorPalette.blue,
			'inputValidation.warningBackground': primaryBackgroundColor,
			'inputValidation.warningForeground': colorPalette.orange,
			'inputValidation.warningBorder': colorPalette.orange,

			// Scrollbar
			'scrollbar.shadow': basePalette.shadow,
			'scrollbarSlider.activeBackground': alpha(basePalette.selection, 0.5),
			'scrollbarSlider.background': alpha(basePalette.selection, 0.6),
			'scrollbarSlider.hoverBackground': alpha(basePalette.selection, 0.99),

			// Badge
			'badge.foreground': primaryBackgroundColor,
			'badge.background': colorPalette[variant],

			// Progress Bar
			'progressBar.background': colorPalette[variant],

			// List
			'list.activeSelectionBackground': alpha(basePalette.selectionDark, 0.9),
			'list.activeSelectionForeground': basePalette.foreground,
			'list.dropBackground': alpha(basePalette.selectionDark, 0.9),
			'list.focusBackground': alpha(basePalette.selectionDark, 0.9),
			'list.focusForeground': basePalette.foreground,
			'list.highlightForeground': basePalette.foreground,
			'list.hoverBackground': alpha(basePalette.selection, 0.5),
			'list.hoverForeground': basePalette.textMid,
			'list.inactiveSelectionBackground': alpha(basePalette.selectionDark, 0.9),
			'list.inactiveSelectionForeground': basePalette.foreground,
			'list.inactiveFocusBackground': alpha(basePalette.selectionDark, 0.9),
			'list.invalidItemForeground': colorPalette.red,
			'list.errorForeground': colorPalette.red,
			'list.warningForeground': colorPalette.orange,
			'listFilterWidget.background': primaryBackgroundColor,
			'listFilterWidget.outline': basePalette.selection,
			'listFilterWidget.noMatchesOutline': colorPalette.red,

			// Tree
			'tree.indentGuidesStroke': basePalette.selection,

			// Activity Bar
			'activityBar.background': primaryBackgroundColor,
			'activityBar.dropBorder': basePalette.selection,
			'activityBar.foreground': basePalette.foreground,
			'activityBar.inactiveForeground': getBaseColor(basePalette.textMid),
			'activityBar.border': primaryBackgroundColor,
			'activityBarBadge.background': colorPalette[variant],
			'activityBarBadge.foreground': primaryBackgroundColor,

			// Side Bar
			'sideBar.background': secondaryBackgroundColor,
			'sideBar.foreground': getBaseColor(basePalette.foreground),
			'sideBarTitle.foreground': colorPalette[variant],
			'sideBarSectionHeader.background': secondaryBackgroundColor,
			'sideBarSectionHeader.foreground': colorPalette[variant],
			'sideBarSectionHeader.border': primaryBackgroundColor,

			// Tab
			'tab.activeBackground': primaryBackgroundColor,
			'tab.unfocusedActiveBackground': primaryBackgroundColor,
			'tab.activeForeground': basePalette.foreground,
			'tab.border': secondaryBackgroundColor,
			'tab.activeBorderTop': colorPalette[variant],
			'tab.unfocusedActiveBorderTop': primaryBackgroundColor,
			'tab.inactiveBackground': secondaryBackgroundColor,
			'tab.inactiveForeground': getBaseColor(basePalette.textMid),
			'tab.unfocusedActiveForeground': basePalette.foreground,
			'tab.unfocusedInactiveForeground': getBaseColor(basePalette.textMid),
			'tab.hoverForeground': colorPalette[variant],

			// Peek View
			'peekView.border': colorPalette[variant],
			'peekViewEditor.background': alpha(basePalette.selectionDark, 0.5),
			'peekViewEditorGutter.background': primaryBackgroundColor,
			'peekViewEditor.matchHighlightBackground': alpha(basePalette.selection, 0.5),
			'peekViewEditor.matchHighlightBorder': basePalette.foreground,
			'peekViewResult.background': alpha(basePalette.selectionDark, 0.5),
			'peekViewResult.fileForeground': basePalette.foreground,
			'peekViewResult.lineForeground': colorPalette[variant],
			'peekViewResult.matchHighlightBackground': basePalette.selectionDark,
			'peekViewResult.selectionBackground': basePalette.selection,
			'peekViewResult.selectionForeground': basePalette.foreground,
			'peekViewTitle.background': alpha(basePalette.selectionDark, 0.5),
			'peekViewTitleDescription.foreground': basePalette.foreground,
			'peekViewTitleLabel.foreground': basePalette.foreground,

			// Icon
			'icon.foreground': basePalette.foreground,

			// Checkbox
			'checkbox.background': primaryBackgroundColor,
			'checkbox.foreground': basePalette.foreground,
			'checkbox.border': primaryBackgroundColor,

			// Merge
			'merge.currentHeaderBackground': alpha(colorPalette.blue, 0.7),
			'merge.currentContentBackground': alpha(colorPalette.blue, 0.22),
			'merge.incomingHeaderBackground': alpha(colorPalette.peridot, 0.7),
			'merge.incomingContentBackground': alpha(colorPalette.peridot, 0.22),
			'merge.border': basePalette.selection,
			'merge.commonHeaderBackground': alpha(basePalette.selection, 0.7),
			'merge.commonContentBackground': alpha(basePalette.selection, 0.6),

			// Panel
			'panel.background': primaryBackgroundColor,
			'panel.border': colorPalette[variant],
			'panel.dropBorder': basePalette.selection,
			'panelTitle.activeBorder': colorPalette[variant],
			'panelTitle.activeForeground': basePalette.foreground,
			'panelTitle.inactiveForeground': getBaseColor(basePalette.textMid),
			'panelInput.border': basePalette.selection,
			'panelSection.border': basePalette.selection,
			'panelSection.dropBackground': basePalette.selection,
			'panelSectionHeader.background': primaryBackgroundColor,
			'panelSectionHeader.foreground': colorPalette[variant],

			// Status Bar
			'statusBar.background': primaryBackgroundColor,
			'statusBar.foreground': basePalette.foreground,
			'statusBar.border': primaryBackgroundColor,
			'statusBar.debuggingBackground': colorPalette.orange,
			'statusBar.debuggingForeground': primaryBackgroundColor,
			'statusBar.noFolderBackground': colorPalette.red,
			'statusBar.noFolderForeground': primaryBackgroundColor,
			'statusBarItem.activeBackground': basePalette.selection,
			'statusBarItem.hoverBackground': basePalette.selection,
			'statusBarItem.remoteBackground': colorPalette.peridot,
			'statusBarItem.remoteForeground': primaryBackgroundColor,

			// Title Bar
			'titleBar.activeBackground': primaryBackgroundColor,
			'titleBar.activeForeground': basePalette.foreground,
			'titleBar.inactiveBackground': primaryBackgroundColor,
			'titleBar.inactiveForeground': basePalette.selection,
			'titleBar.border': primaryBackgroundColor,

			// Menu
			'menubar.selectionForeground': basePalette.foreground,
			'menubar.selectionBackground': basePalette.selection,
			'menu.foreground': basePalette.foreground,
			'menu.background': primaryBackgroundColor,
			'menu.selectionForeground': basePalette.foreground,
			'menu.selectionBackground': basePalette.selection,

			// Notifications
			'notificationCenter.border': primaryBackgroundColor,
			'notificationCenterHeader.foreground': basePalette.foreground,
			'notificationCenterHeader.background': primaryBackgroundColor,
			'notificationToast.border': primaryBackgroundColor,
			'notifications.foreground': basePalette.foreground,
			'notifications.background': primaryBackgroundColor,
			'notifications.border': primaryBackgroundColor,
			'notificationLink.foreground': basePalette.foreground,

			// Extension Button
			'extensionButton.prominentBackground': colorPalette[variant],
			'extensionButton.prominentForeground': primaryBackgroundColor,
			'extensionButton.prominentHoverBackground': alpha(basePalette.selection, 0.5),

			// Picker Group
			'pickerGroup.border': basePalette.selection,
			'pickerGroup.foreground': colorPalette[variant],

			// Terminal
			'terminal.background': primaryBackgroundColor,
			'terminal.border': colorPalette[variant],
			'terminal.foreground': basePalette.foreground,
			'terminal.ansiBlack': basePalette.selectionDark,
			'terminal.ansiBlue': colorPalette.blue,
			'terminal.ansiBrightBlue': lightColorPalette.blue,
			'terminal.ansiBrightCyan': lightColorPalette.cyan,
			'terminal.ansiBrightGreen': lightColorPalette.peridot,
			'terminal.ansiBrightBlack': basePalette.selection,
			'terminal.ansiBrightMagenta': lightColorPalette.purple,
			'terminal.ansiBrightRed': lightColorPalette.red,
			'terminal.ansiBrightWhite': basePalette.foreground,
			'terminal.ansiBrightYellow': lightColorPalette.yellow,
			'terminal.ansiCyan': colorPalette.cyan,
			'terminal.ansiGreen': colorPalette.peridot,
			'terminal.ansiMagenta': colorPalette.purple,
			'terminal.ansiRed': colorPalette.red,
			'terminal.ansiWhite': basePalette.foreground,
			'terminal.ansiYellow': colorPalette.yellow,
			'terminal.selectionBackground': alpha(basePalette.selection, 0.33),
			'terminalCursor.background': colorPalette[variant],
			'terminalCursor.foreground': colorPalette[variant],

			// Debug Toolbar
			'debugToolBar.background': basePalette.selection,
			'debugToolBar.border': basePalette.selection,

			// Welcome Page
			'welcomePage.buttonBackground': basePalette.selection,
			'welcomePage.buttonHoverBackground': alpha(basePalette.selection, 0.99),
			'walkThrough.embeddedEditorBackground': primaryBackgroundColor,

			// Git Decoration
			'gitDecoration.modifiedResourceForeground': colorPalette.blue,
			'gitDecoration.deletedResourceForeground': colorPalette.red,
			'gitDecoration.untrackedResourceForeground': colorPalette.peridot,
			'gitDecoration.ignoredResourceForeground':
				baseVariant === 'default' ? basePalette.selection : basePalette.selectionDark,
			'gitDecoration.conflictingResourceForeground': colorPalette.red,

			// Settings
			'settings.headerForeground': basePalette.foreground,
			'settings.modifiedItemIndicator': colorPalette[variant],
			'settings.dropdownBackground': basePalette.selectionDark,
			'settings.dropdownForeground': basePalette.foreground,
			'settings.dropdownBorder': basePalette.selectionDark,
			'settings.dropdownListBorder': basePalette.selectionDark,
			'settings.checkboxBackground': basePalette.selectionDark,
			'settings.checkboxForeground': basePalette.foreground,
			'settings.checkboxBorder': basePalette.selectionDark,
			'settings.textInputBackground': basePalette.selectionDark,
			'settings.textInputForeground': basePalette.foreground,
			'settings.textInputBorder': basePalette.selectionDark,
			'settings.numberInputBackground': basePalette.selectionDark,
			'settings.numberInputForeground': basePalette.foreground,
			'settings.numberInputBorder': basePalette.selectionDark,

			// Breadcrumb
			'breadcrumb.foreground': basePalette.foreground,
			'breadcrumb.background': primaryBackgroundColor,
			'breadcrumb.focusForeground': basePalette.foreground,
			'breadcrumb.activeSelectionForeground': basePalette.foreground,
			'breadcrumbPicker.background': primaryBackgroundColor,
		},
		tokenColors: [
			{
				scope: [],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Comment',
				scope: ['comment', 'punctuation.definition.comment'],
				settings: {
					fontStyle: 'italic',
					foreground: getBaseColor(basePalette.textMid),
				},
			},
			{
				name: 'Variables',
				scope: ['variable', 'string constant.other.placeholder', 'source'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Colors',
				scope: [
					'constant.other.color',
					'punctuation.definition.entity',
					'constant.character.entity',
					'punctuation.definition.template-expression',
					'punctuation.section.tag.twig',
				],
				settings: {
					foreground: colorPalette.yellow,
				},
			},
			{
				name: 'Invalid',
				scope: ['invalid', 'invalid.illegal'],
				settings: {
					foreground: colorPalette.red,
				},
			},
			{
				name: 'Storage, Number, Constant',
				scope: [
					'storage.type',
					'storage.modifier',
					'constant.language',
					'support.constant',
					'constant.character',
					'constant.escape',
				],
				settings: {
					foreground: colorPalette.blue,
				},
			},
			{
				name: 'Keyword',
				scope: ['keyword'],
				settings: {
					foreground: colorPalette.yellow,
				},
			},
			{
				name: 'Constant, Number',
				scope: ['constant.language.boolean', 'constant.numeric'],
				settings: {
					foreground: colorPalette.orange,
				},
			},
			{
				name: 'Operator, Misc',
				scope: [
					'punctuation',
					'punctuation.definition.tag',
					'punctuation.separator.inheritance.php',
					'punctuation.definition.tag.html',
					'punctuation.section.embedded',
					'keyword.other.template',
					'keyword.other.substitution',
					'meta.brace',
					'meta.block',
					'meta.jsx',
					'meta.embedded.expression',
					'meta.template.expression',
					'meta.tag.block.any.html',
					'string.unquoted.tag-string.nunjucks',
					'text.html.nunjucks',
				],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Attribute Equal Signs, handlebars operators',
				scope: [
					'punctuation.separator.key-value.html',
					'keyword.control',
					'keyword.operator',
					'constant.other.color',
					'punctuation.definition.constant',
					'meta.function.block.start.handlebars',
					'meta.function.inline.other',
					'meta.property-value',
					'support.constant.mathematical-symbols',
					'support.constant.vendored.property-value',
					'punctuation.definition.keyword',
					'punctuation.accessor',
					'punctuation.separator.property',
					'string.unquoted.filter-pipe',
				],
				settings: {
					foreground: colorPalette.orange,
				},
			},
			{
				name: 'Tag',
				scope: [
					'entity.name.tag',
					'meta.tag.sgml',
					'markup.deleted.git_gutter',
					'support.variable.dom',
					'meta.import',
					'meta.export',
					'meta.export.default',
					'support.class.builtin',
					'support.class.component',
					'variable.other.object',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Function, Special Method',
				scope: [
					'entity.name.function',
					'variable.function',
					'support.function',
					'keyword.other.special-method',
					'meta.function-call',
					'keyword.control.filter',
				],
				settings: {
					foreground: colorPalette.yellow,
				},
			},
			{
				name: 'Block Level Variables',
				scope: ['meta.block variable.other'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Function Argument, Tag Attribute, Embedded, Things that should be grey',
				scope: [
					'variable.parameter',
					'text.html',
					'punctuation.section.property-list',
					'meta.property-value.scss punctuation',
					'meta.property-list',
					'keyword.operator.type.annotation',
					'variable.other.object.property',
				],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'String, Symbols, Inherited Class, Markup Heading',
				scope: [
					'string',
					'constant.other.symbol',
					'constant.other.key',
					'markup.heading',
					'markup.inserted.git_gutter',
					'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
					'punctuation.definition.string',
					'entity.name.section.markdown',
					'meta.attribute-selector',
					'entity.name.import.go',
					'storage.type.attr.nunjucks',
				],
				settings: {
					foreground: colorPalette.peridot,
				},
			},
			{
				name: 'Class, Support',
				scope: [
					'entity.name',
					'support.type',
					'support.orther.namespace.use.php',
					'meta.use.php',
					'support.other.namespace.php',
					'markup.changed.git_gutter',
					'support.type.sys-types',
					'meta.object-literal.key',
				],
				settings: {
					foreground: colorPalette.blue,
				},
			},
			{
				name: 'Entity Types',
				scope: [
					'support.type',
					'support.class',
					'keyword.other.debugger',
					'entity.other.inherited-class',
					'meta.property-name',
					'punctuation.definition.raw.markdown',
					'variable.graphql',
					'variable.other.readwrite',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Go Function',
				scope: 'keyword.function.go',
				settings: {
					foreground: colorPalette.blue,
				},
			},
			{
				name: 'CSS Class and Support',
				scope: [
					'source.css support.type.property-name',
					'source.sass support.type.property-name',
					'source.scss support.type.property-name',
					'source.less support.type.property-name',
					'source.stylus support.type.property-name',
					'source.postcss support.type.property-name',
					'support.type.property-name',
					'support.variable.object.node',
					'support.variable.object.process',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Scala',
				scope: 'variable.parameter.scala',
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'Sub-methods',
				scope: ['entity.name.module.js', 'variable.import.parameter.js'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Language methods',
				scope: ['variable.language'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'entity.name.method.js',
				scope: ['entity.name.method.js'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'meta.method.js',
				scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Attributes',
				scope: ['entity.other.attribute-name'],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'HTML Attributes',
				scope: ['text.html.basic entity.other.attribute-name.html', 'text.html.basic entity.other.attribute-name'],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'CSS Classes',
				scope: ['entity.other.attribute-name.class', 'punctuation.definition.entity.css'],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: "CSS ID's",
				scope: ['source.sass keyword.control'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Inserted',
				scope: ['markup.inserted'],
				settings: {
					foreground: colorPalette.peridot,
				},
			},
			{
				name: 'Deleted',
				scope: ['markup.deleted'],
				settings: {
					foreground: colorPalette.red,
				},
			},
			{
				name: 'Changed',
				scope: ['markup.changed'],
				settings: {
					foreground: colorPalette.yellow,
				},
			},
			{
				name: 'Regular Expressions',
				scope: ['string.regexp'],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'Escape Characters',
				scope: ['constant.character.escape'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'URL',
				scope: ['*url*', '*link*', '*uri*'],
				settings: {
					fontStyle: 'underline',
				},
			},
			{
				name: 'Decorators',
				scope: ['meta.decorator', 'tag.decorator.js entity.name.tag', 'tag.decorator.js punctuation.definition.tag'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'ES7 Bind Operator',
				scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 0',
				scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 1',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 2',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'JSON Key - Level 3',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 4',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'JSON Key - Level 5',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 6',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'JSON Key - Level 7',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'JSON Key - Level 8',
				scope: [
					'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
				],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'Markup - Italic',
				scope: ['markup.italic'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markup - Bold',
				scope: ['markup.bold'],
				settings: {
					fontStyle: 'bold',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markup - Underline',
				scope: ['markup.underline'],
				settings: {
					fontStyle: 'underline',
					foreground: colorPalette.yellow,
				},
			},
			{
				name: 'Markup - Strike',
				scope: ['markup.strike'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.orange,
				},
			},
			{
				name: 'Markup - Quote',
				scope: ['markup.quote'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markup - Raw Block',
				scope: ['markup.raw.block'],
				settings: {
					foreground: colorPalette.pink,
				},
			},
			{
				name: 'Markup - Table',
				scope: ['markup.table'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markdown - Plain',
				scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Markdown - Markup Raw Inline',
				scope: ['text.html.markdown markup.raw.inline', 'text.html.markdown markup.inline.raw.string.markdown'],
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markdown - Line Break',
				scope: ['text.html.markdown meta.dummy.line-break'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Markdown - Heading',
				scope: [
					'markdown.heading',
					'markup.heading',
					'markup.heading entity.name',
					'markup.heading.markdown',
					'punctuation.definition.heading.markdown',
				],
				settings: {
					foreground: colorPalette.peridot,
				},
			},
			{
				name: 'Markdown - Blockquote',
				scope: ['markup.quote', 'punctuation.definition.blockquote.markdown'],
				settings: {
					fontStyle: 'italic',
					foreground: colorPalette.purple,
				},
			},
			{
				name: 'Markdown - Link',
				scope: ['string.other.link.title.markdown'],
				settings: {
					fontStyle: 'underline',
					foreground: colorPalette.orange,
				},
			},
			{
				name: 'Markdown - Raw Block Fenced',
				scope: ['markup.raw.block.fenced.markdown'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Markdown - Fenced Bode Block',
				scope: ['punctuation.definition.fenced.markdown', 'variable.language.fenced.markdown'],
				settings: {
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Markdown - Fenced Language',
				scope: ['variable.language.fenced.markdown'],
				settings: {
					fontStyle: '',
					foreground: basePalette.foreground,
				},
			},
			{
				name: 'Markdown - Separator',
				scope: ['meta.separator'],
				settings: {
					fontStyle: '',
					foreground: basePalette.foreground,
				},
			},
			{
				scope: 'token.info-token',
				settings: {
					foreground: colorPalette.purple,
				},
			},
			{
				scope: 'token.warn-token',
				settings: {
					foreground: colorPalette.orange,
				},
			},
			{
				scope: 'token.error-token',
				settings: {
					foreground: colorPalette.red,
				},
			},
			{
				scope: 'token.debug-token',
				settings: {
					foreground: colorPalette.yellow,
				},
			},
			{
				scope: ['storage.type.error.go'],
				settings: {
					foreground: colorPalette.red,
				},
			},
			{
				scope: 'punctuation.other.period.go',
				settings: {
					foreground: colorPalette.pink,
				},
			},
		],
	};
};
