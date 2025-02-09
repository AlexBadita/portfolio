"use client";

import { useActionSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import useSectionInView from "@/assets/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref} id="projects">
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta,
        tortor non interdum sollicitudin, tortor augue lacinia quam, et
        consequat purus augue eget diam. Nunc vitae consequat libero, sit amet
        ultrices nibh. Cras fringilla sollicitudin lectus sit amet pulvinar.
        Donec lacinia mollis dui sed consectetur. Nullam auctor interdum justo.
        Maecenas ut turpis non lacus interdum dictum. Fusce nec ornare turpis.
        Mauris hendrerit consequat dapibus. Mauris ante augue, lobortis ut erat
        elementum, hendrerit pellentesque elit. Ut eu imperdiet libero. Duis
        scelerisque mi ut dolor imperdiet elementum. Nulla facilisi. Duis
        gravida hendrerit ligula id tempor. Integer consequat mi cursus nisi
        aliquet maximus. Etiam hendrerit leo in dui sagittis placerat. Nullam
        vitae sollicitudin massa. Aenean tempus ex ac pellentesque vehicula.
        Aenean mattis arcu turpis, vel placerat ante egestas non. Sed sodales
        tortor quis eros condimentum, in facilisis ligula ultrices. Etiam sed
        erat consectetur, finibus urna sit amet, vestibulum felis. Maecenas
        vehicula varius dictum. Integer condimentum ac arcu eget volutpat.
        Suspendisse dolor arcu, luctus a mattis nec, laoreet eget velit. Quisque
        pretium laoreet ornare. Curabitur non sapien malesuada, tincidunt arcu
        et, placerat ex. Morbi molestie ligula arcu, in consequat mauris commodo
        eu. Nulla fermentum, enim non tempor consectetur, ante lectus tristique
        mauris, sed pellentesque nulla enim quis nulla. Curabitur venenatis
        gravida dignissim. Integer accumsan odio a dui finibus iaculis sed
        faucibus arcu. Ut suscipit et eros vel ultrices. In hac habitasse platea
        dictumst. Aenean elit nunc, pharetra nec molestie hendrerit, vehicula ut
        ex. Quisque volutpat pharetra euismod. Nullam luctus nibh vitae tempus
        ultrices. Nunc eget mi ullamcorper erat suscipit gravida vel et ex.
        Suspendisse id gravida nibh. Pellentesque mollis leo non luctus rutrum.
        Sed efficitur mi at nisi sollicitudin, et tristique enim vehicula. Etiam
        ut nibh at diam elementum accumsan at ut libero. Aenean vel justo
        elementum ligula finibus ornare ut quis ligula. Vestibulum malesuada
        dictum mauris, quis lacinia felis finibus a. Maecenas gravida faucibus
        mollis. Maecenas placerat massa ac purus ultricies, a tincidunt lorem
        tempus. Phasellus in pellentesque ligula. Praesent et libero leo.
        Maecenas ac egestas ipsum. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec neque lectus, varius ut
        tellus sit amet, maximus euismod mauris. Aliquam ornare tellus vitae
        metus malesuada fermentum. In tellus purus, aliquet nec velit vel,
        ultrices ornare ligula. Morbi scelerisque, enim vel iaculis dapibus,
        diam odio cursus nisl, a pharetra metus lectus vitae odio. Pellentesque
        sodales risus sem, sit amet ultricies diam aliquet eu. Sed cursus tellus
        ex, eget ornare sem accumsan eu. Vestibulum consequat justo nulla, eget
        dignissim mi pretium a. Curabitur leo eros, scelerisque a elit ut,
        malesuada molestie nibh. Pellentesque in tincidunt tortor, vel tincidunt
        nisi. Aenean rutrum turpis at justo rhoncus, a sollicitudin risus
        porttitor. Nullam odio orci, egestas eget interdum quis, ornare eget
        turpis. Etiam at mollis arcu. Integer aliquam, dolor at porttitor
        varius, magna magna mattis sapien, non sodales elit justo quis leo.
        Fusce lobortis tincidunt mi sed sollicitudin. Nullam vel odio varius,
        pulvinar turpis vitae, finibus metus. Vestibulum vestibulum, justo et
        rutrum mollis, mi sapien imperdiet turpis, eget efficitur tortor ligula
        in tortor. Nullam nulla ligula, varius nec scelerisque vitae, pulvinar
        id velit. Maecenas ex dui, dignissim scelerisque orci eget, cursus
        mattis diam. Nunc risus purus, sodales rhoncus iaculis sit amet, varius
        et mi. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nam ullamcorper mattis dolor, a
        molestie dui efficitur in. Suspendisse ac purus ac nibh ullamcorper
        aliquet. Duis molestie sit amet lacus sit amet vehicula. Curabitur
        euismod dui ligula, vel semper magna rhoncus sit amet. Cras sodales
        blandit nunc, in sagittis velit suscipit eu. Donec posuere libero sit
        amet arcu mollis varius. Nunc malesuada aliquet efficitur. Vivamus
        consectetur massa ac lectus condimentum, ac sollicitudin neque finibus.
        In lobortis gravida sagittis. In in risus nec ante dapibus condimentum
        sit amet ac justo. Ut ac placerat ipsum, sit amet porttitor justo. Donec
        et finibus elit. Sed sollicitudin aliquet blandit. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla velit urna, molestie quis porttitor sed, tristique at augue. Ut
        aliquam ligula id enim auctor ullamcorper. Sed dignissim magna
        condimentum magna mollis fermentum. Sed massa risus, venenatis non
        mauris vel, cursus lacinia nunc. Praesent pulvinar tortor quis mi
        aliquam elementum. Phasellus in imperdiet justo. Pellentesque id nisi
        sodales ex lobortis placerat sed ut turpis. Suspendisse odio velit,
        ultrices eget nisi et, cursus aliquam nunc. Mauris volutpat elit ac
        placerat dignissim. Etiam sit amet lectus mauris. Sed a luctus diam.
        Etiam eu ligula sodales, dictum turpis at, consequat nibh. Cras eu lacus
        varius, rutrum lectus non, convallis est. Mauris efficitur turpis
        libero. In vitae est tincidunt, sagittis elit in, varius nibh. Sed eget
        quam dignissim, vestibulum ante ac, interdum nulla. Phasellus euismod,
        lacus ac pellentesque tempor, lectus tortor viverra ex, ut accumsan
        lorem ligula id augue. Donec sit amet finibus urna. Nam in ex tristique,
        dictum orci at, lacinia leo. Morbi viverra, orci id posuere congue, odio
        enim suscipit nisl, a ullamcorper tellus nibh nec purus. Aliquam dapibus
        mattis luctus.
      </p> */}
    </div>
  );
};

export default Projects;
