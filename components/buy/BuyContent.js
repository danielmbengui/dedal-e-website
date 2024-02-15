import React from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { HeroBanner } from "@/devlink/HeroBanner";
import { TAB_IMAGES_EXAMPLES } from "@/constants/images";


export function BuyContent({ as: _Component = _Builtin.Block }) {
    return (
        <_Builtin.Block className="div-block-32" style={{ paddingBottom: 0 }} tag="div">
            {
                TAB_IMAGES_EXAMPLES.map((image_src, index) => {
                    return (
                        <_Builtin.Block
                            key={index}
                            className="div-block-creation-main"
                            id="w-node-_288531a2-5f80-264b-2537-d07ba7507e5a-0fe3a9b9"
                            tag="div"
                        >
                            <_Builtin.Block
                                className="div-block-title-creation"
                                tag="div"
                            >
                                <_Builtin.Block
                                    className="text-block-title-creation"
                                    tag="div"
                                >
                                    {"Title Creation"}
                                </_Builtin.Block>
                            </_Builtin.Block>
                            <_Builtin.Block
                                className="div-block-image-creation"
                                tag="div"
                            >
                                <_Builtin.Image
                                    className="image-creation"
                                    loading="lazy"
                                    width="auto"
                                    height="auto"
                                    alt=""
                                    src={image_src}
                                />
                            </_Builtin.Block>
                            <_Builtin.Block
                                className="div-block-description-main"
                                tag="div"
                            >
                                <_Builtin.Block
                                    className="div-block-description"
                                    tag="div"
                                >
                                    <_Builtin.HtmlEmbed
                                        className="html-embed-6 image"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block
                                        className="text-block-description"
                                        tag="div"
                                    >
                                        {"Description image"}
                                    </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                    className="div-block-description"
                                    tag="div"
                                >
                                    <_Builtin.HtmlEmbed
                                        className="html-embed-6 animation"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block
                                        className="text-block-description"
                                        tag="div"
                                    >
                                        {"Description animation"}
                                    </_Builtin.Block>
                                </_Builtin.Block>
                                <_Builtin.Block
                                    className="div-block-description"
                                    tag="div"
                                >
                                    <_Builtin.HtmlEmbed
                                        className="html-embed-6 music"
                                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block
                                        className="text-block-description"
                                        tag="div"
                                    >
                                        {"Description musique"}
                                    </_Builtin.Block>
                                </_Builtin.Block>
                            </_Builtin.Block>
                        </_Builtin.Block>
                    )
                })
            }
        </_Builtin.Block>
    );
}
