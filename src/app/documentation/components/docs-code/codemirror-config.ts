const codeMirrorReadonlyOptions = (mode: string) => {
    return {
        theme: 'material-darker',
        mode,
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        lineWrapping: false,
        autoCloseBrackets: true,
        matchBrackets: true,
        matchTags: true,
        lint: true,
        styleActiveLine: true,
        showTrailingSpace: true,
        readOnly: true,
        autoRefresh: true
    }
};

export { codeMirrorReadonlyOptions };
