<script>
    import {onMount} from 'svelte';
    import Container from 'components/Container/Container.svelte';

    function execCommand(command, options = {}) {
        console.log(command, options);
        let {param} = options;

        document.execCommand(command, false, param);
    }

    let commandsConfig = [
        {
            label: 'H1',
            command: 'formatBlock',
            param: '<H1>',
        },
        {
            label: 'H2',
            command: 'formatBlock',
            param: '<H2>',
        },
        {
            label: 'H3',
            command: 'formatBlock',
            param: '<H3>',
        },
        {
            label: '<b>B</b>',
            command: 'bold',
        },
        {
            label: '<s>S</s>',
            command: 'strikeThrough',
        },
        {
            label: '<i>I</i>',
            command: 'italic',
        },
        {
            label: '<u>U</u>',
            command: 'underline',
        },
        {
            label: 'UL',
            command: 'insertUnorderedList',
        },
        {
            label: 'OL',
            command: 'insertOrderedList',
        },
        {
            label: 'HR',
            command: 'insertHorizontalRule',
        },
    ];

    function getOuterTags(node, highestNode) {
        let parentNode = node;

        let tags = [];

        while (parentNode && parentNode !== highestNode) {
            let {tagName} = parentNode;

            if (tagName) {
                tags.push(tagName);
            }

            parentNode = parentNode.parentNode;
        }

        if (parentNode !== highestNode) {
            return [];
        }

        return tags;
    }

    let editorTextArea;
    $: currentTags = [];

    function handleSelectionChange() {
        currentTags = getOuterTags(document.getSelection().focusNode, editorTextArea);
    }

    onMount(() => {
        document.addEventListener('selectionchange', handleSelectionChange);
    });
</script>

<Container>
    <div class="editor">
        <ul class="controls">
            {#each commandsConfig as {className, param, label, command}}
                <button
                    class="editor-button {className}"
                    class:editor-button__selected="{currentTags.includes(label)}"
                    on:click="{() => execCommand(command, {param})}"
                >
                    {@html label}
                </button>
            {/each}
        </ul>
        <div bind:this="{editorTextArea}" class="html-editor" contenteditable="true"></div>
    </div>
</Container>

<style>
    .italic {
        font-style: italic;
    }

    .bold {
        font-weight: 600;
    }

    .editor {
        --main-border-color: rgba(0, 0, 0, 0.5);
    }

    .controls {
        position: relative;
        display: flex;
        flex-direction: row;
        border: 1px solid var(--main-border-color);
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        border-bottom: none;
    }

    .controls::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--main-border-color);
    }

    .editor-button {
        border: none;
        background: none;
        line-height: 40px;
        min-width: 40px;
        padding: 0;
        margin: 0 8px;
    }

    .editor-button__selected {
        box-shadow: 0 0 1px red;
    }

    .html-editor {
        padding: 8px;
        border: 1px solid var(--main-border-color);
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top: none;
        min-height: 300px;
    }
</style>
