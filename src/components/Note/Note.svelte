<style type="text/postcss">
    .note {
        max-width: 600px;
        margin: auto;
        font-size: 18px;
        line-height: 24px;

        :global(ul) {
            margin: 0;
            padding-left: 0;
        }

        :global(li) {
            list-style-type: none;
            &::before {
                content: "•";
                margin: 0 12px 0 0;
                color: #ccc;
            }
        }

        :global(.note) {
            max-width: 600px;
            margin: auto;
            hyphens: auto;
        }

        :global(p, ul) {
            padding-bottom: 16px;
        }

        :global(hr) {
            margin: 0 0 16px;
        }

        :global(code) {
            font-family: Menlo, Consolas, Monaco, monospace;
            padding: 4px 8px;
            font-size: 90%;
            border-radius: 4px;
            background: linear-gradient(90deg, #e5f2ff, #ebfeff);
        }
    }
</style>

<article class="note">
    <slot />
</article>
