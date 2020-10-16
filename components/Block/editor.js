import React, { useState, useEffect } from "react";
import MarkdownEditor from "rich-markdown-editor";
import { useDocument } from "@nandorojo/swr-firestore";


const Editor = ({ blockId }) => {
    const { data: block, error, loading } = useDocument(`blocks/${blockId}`)
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (block !== undefined && value === null) {
            console.log("Set initial content");
            setValue(block.content);
        }
    }, [block, value]);

    if (error) return <p>We had an issue while getting the data</p>;

    else if (!block) return <p>Loading...</p>;

    else {
        return (
            <span style={{height:250,width:300,margin:'auto',maxWidth:400}}>
                <MarkdownEditor
                    defaultValue={block.content}
                    onChange={(getValue) => {
                        setValue(getValue());
                    }}
                />
            </span>
        );
    }
};

export default Editor;