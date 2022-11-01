import React, { useEffect } from "react";
import '../App.css';

function Grid() {

    let gridElements = [];
    for (let i = 0; i < 522; i++) {
        gridElements.push(<div id={`griditemid-${i}`} key={i} className="griditem"></div>);
    }

    let jValues = [92, 121, 150, 179, 208, 237, 266, 295, 323, 322, 292, 210, 239, 268, 297, 327, 328, 300, 271, 242, 213, 99, 128, 157, 186, 215, 244, 273, 302, 331, 245, 275, 305, 335, 217, 189, 161, 105, 134, 163, 192, 221, 250, 279, 308, 337,
        251, 223, 195, 167, 281, 311, 341, 343, 314, 285, 256, 227, 198, 199, 200, 230, 259, 288, 317, 346, 201, 257, 258]

    let wasTextValues = [92, 121, 150, 179, 208, 237, 266, 295, 324, 296, 268, 240, 270, 300, 330, 301, 272, 243, 214, 185, 156, 127, 98, 332, 303, 274, 245, 216, 187, 188, 189, 190, 191, 220, 249, 278, 307, 336, 246, 247, 248, 164, 165, 166, 167, 168,
        169, 193, 222, 251, 252, 253, 254, 255, 256, 285, 314, 343, 342, 341, 340, 339, 338]
    let hereTextValues = [90, 119, 148, 177, 206, 235, 264, 293, 322, 207, 208, 209, 210, 94, 123, 152, 181, 210, 239, 268, 297, 326, 154, 183, 212, 241, 270, 299, 328, 329, 330, 242, 155, 156, 157, 331, 243, 159, 188, 217, 246, 275, 304, 333, 160, 161,
        162, 163, 192, 221, 220, 219, 218, 248, 249, 278, 279, 308, 309, 338, 166, 195, 224, 253, 282, 311, 340, 167, 168, 169, 254, 255, 341, 342, 343]

    let remainder = 0;
    setInterval(() => {
        if (remainder % 6 == 0) {
            for (let i = 0; i < hereTextValues.length; i++) {
                document.getElementsByClassName("griditem")[hereTextValues[i]].style.background = "yellow";
            }
        } else if (remainder % 6 == 2) {
            for (let i = 0; i < jValues.length; i++) {
                document.getElementsByClassName("griditem")[jValues[i]].style.background = "yellow";
            }
        } else if (remainder % 6 == 4) {
            for (let i = 0; i < wasTextValues.length; i++) {
                document.getElementsByClassName("griditem")[wasTextValues[i]].style.background = "yellow";
            }
        }
        else {
            for (let i = 0; i < gridElements.length; i++) {
                document.getElementsByClassName("griditem")[i].style.background = "black";
            }
        }
        remainder += 1
    }, 200);

    return (
        <>
            <div className="gridcontainer">
                {gridElements}
            </div>
        </>
    )
}
export default Grid