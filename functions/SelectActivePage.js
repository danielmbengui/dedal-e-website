import React, { useEffect } from "react";
import { LINK_HOME_PAGE } from "@/constants";
import { useRouter } from "next/router";

export function SelectActivePage(element, url) {
    //var element = document.getElementById('id-nav-home-page');

    // Modifiez l'attribut src de l'élément (par exemple, pour une image)
    console.log("element ", element);
    element.className = `nav-link ${LINK_HOME_PAGE === url ? 'w--current' : ''}`;
    if (LINK_HOME_PAGE.startsWith(url)) {
        //element.className = `nav-link ${LINK_HOME_PAGE === url ? 'w--current' : ''}`;
    }
}