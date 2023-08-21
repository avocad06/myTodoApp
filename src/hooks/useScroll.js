import { useEffect, useState } from "react";

const useScroll = (ref, data) => {
    const node = ref.current;
    const [listHeight, setListHeight] = useState(0);

    useEffect(() => {
        if (node) {
            const height = node.scrollHeight;

            if (listHeight < height) {
                node.scrollTop = node.scrollHeight;
            }
            return setListHeight(height);
        }
    }, [data.length]);
}


export default useScroll