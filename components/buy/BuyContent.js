import React, { useState } from "react";
import * as _Builtin from "@/devlink/_Builtin";
import { HeroBanner } from "@/devlink/HeroBanner";
import { IMAGE_TEST_1, IMAGE_TEST_10, IMAGE_TEST_11, IMAGE_TEST_12, IMAGE_TEST_2, IMAGE_TEST_3, IMAGE_TEST_4, IMAGE_TEST_5, IMAGE_TEST_6, IMAGE_TEST_7, IMAGE_TEST_8, IMAGE_TEST_9, TAB_IMAGES_EXAMPLES } from "@/constants/images";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const TAB_CONTENT_MEDIA = [
    {
        type:'Image',
        src:IMAGE_TEST_1,
        title:"My image",
        price:"5'000 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
    },
    {
        type:'Animation',
        src:IMAGE_TEST_2,
        title:"My animation",
        price:"770 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Music',
        src:IMAGE_TEST_3,
        title:"My music",
        price:"1'270 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Image',
        src:IMAGE_TEST_4,
        title:"My image",
        price:"4'230 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Animation',
        src:IMAGE_TEST_5,
        title:"My animation",
        price:"250 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Music',
        src:IMAGE_TEST_6,
        title:"My music",
        price:"9'170 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Image',
        src:IMAGE_TEST_7,
        title:"My image",
        price:"6'380 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Animation',
        src:IMAGE_TEST_8,
        title:"My animation",
        price:"7'500 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Music',
        src:IMAGE_TEST_9,
        title:"My music",
        price:"5'345 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Image',
        src:IMAGE_TEST_10,
        title:"My image",
        price:"2'150 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Animation',
        src:IMAGE_TEST_11,
        title:"My animation",
        price:"3'440 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
    {
        type:'Music',
        src:IMAGE_TEST_12,
        title:"My music",
        price:"2'180 $",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description1:"Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",
        description2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.",    },
];



export function BuyContent({ as: _Component = _Builtin.Block }) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedContent, setSelectedContent] = useState(TAB_CONTENT_MEDIA[0]);
    const handleOpen = (content) => {
        //setBackdrop(backdrop)
        setSelectedContent(content)
        onOpen();
      }
    return (
        <_Builtin.Block className="div-block-32" style={{ paddingBottom: 0 }} tag="div">
            <Modal size="xl" scrollBehavior={'inside'} backdrop={'blur'} isOpen={isOpen} onClose={onClose} style={{marginTop:'10rem', marginLeft:250}}>
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" style={{float:'left'}}>
                {selectedContent.title} <br />
                <div
                        style={{display:'inline-flex'}}
                        tag="div"
                      >
                        {
                            selectedContent.type === 'Image' && <_Builtin.HtmlEmbed
                            className="html-embed-6 image"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        {
                            selectedContent.type === 'Animation' && <_Builtin.HtmlEmbed
                            className="html-embed-6 animation"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        {
                            selectedContent.type === 'Music' && <_Builtin.HtmlEmbed
                            className="html-embed-6 music"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        <_Builtin.Block
                          className="text-block-description"
                          tag="div"
                          style={{marginLeft: 10}}
                        >
                          {selectedContent.type}
                        </_Builtin.Block>
            </div>
            <div
            style={{display:'inline-flex'}}
            tag="div"
                      >
                        {selectedContent.price}
                      </div>
                </ModalHeader>
              <ModalBody>
              <div style={{textAlign:'center'}}>
              <_Builtin.Image
                        className="image-creation"
                        loading="lazy"
                        width="auto"
                        height="auto"
                        alt=""
                        src={selectedContent.src}
                      />
              </div>
                <p> 
                {selectedContent.description}
                </p>
                <p> 
                {selectedContent.description1}
                </p>
                <p> 
                {selectedContent.description2}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Add to cart
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            {
                TAB_CONTENT_MEDIA.map((content, index) => {
                    return (
                        <_Builtin.Block
                        className="div-block-creation-main"
                        id="w-node-_288531a2-5f80-264b-2537-d07ba7507e5a-0fe3a9b9"
                        tag="div"
                        onClick={() => handleOpen(content)}
                  >
                    <_Builtin.Block
                      className="div-block-title-creation"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="div-block-description title"
                        tag="div"
                      >
                        {
                            content.type === 'Image' && <_Builtin.HtmlEmbed
                            className="html-embed-6 image"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        {
                            content.type === 'Animation' && <_Builtin.HtmlEmbed
                            className="html-embed-6 animation"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        {
                            content.type === 'Music' && <_Builtin.HtmlEmbed
                            className="html-embed-6 music"
                            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%208%208%22%20fill%3D%22none%22%3E%0A%3Ccircle%20cx%3D%224%22%20cy%3D%224%22%20r%3D%224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        }
                        <_Builtin.Block
                          className="text-block-description"
                          tag="div"
                        >
                          {content.type}
                        </_Builtin.Block>
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
                        src={content.src}
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="div-block-description-main"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="text-block-title-creation"
                        tag="div"
                      >
                        {content.title}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className="text-block-title-creation price"
                        tag="div"
                      >
                        {content.price}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                    )
                })
            }
        </_Builtin.Block>
    );
}
