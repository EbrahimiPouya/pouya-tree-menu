import React, {useEffect, useState} from 'react';

interface PropsT {
    isCollapse: boolean,
    isChecked: boolean,
    name: string,
    haveParent: boolean,
    haveChildren: boolean,
    onChange: (newChecked: boolean) => void,
    onChangeCollapseState: (newCollapse: boolean) => void,
}

const TreeRenderItem = ({
                            isCollapse = true,
                            isChecked = false,
                            name = 'new folder',
                            haveParent = false,
                            haveChildren = false,
                            onChange = () => {
                            },
                            onChangeCollapseState = () => {
                            },
                        }: PropsT) => {

    const [myCollapse, setMyCollapse] = useState<boolean>(isCollapse)
    const [myChecked, setMyChecked] = useState<boolean>(isChecked)


    const handleOnCollapse = () => {
        setMyCollapse((prevCollapse) => !prevCollapse)
    }

    useEffect(() => {
        onChangeCollapseState(myCollapse)
    }, [myCollapse])


    const handleOnCheck = () => {
        setMyChecked((prevChecked) => !prevChecked)
    }

    useEffect(() => {
        onChange(myCollapse)
    }, [myCollapse])


    return (
        <div className="permission-tree-render-item">
            {haveParent &&
            <div style={{
                width: '15px',
                height: '1px',
                background: 'black',
                marginLeft: '5px',
            }}/>
            }

            {haveChildren &&
            <i style={{fontSize: '17px'}}
               className={`fa fa-folder${myCollapse ? '' : '-open'}`}
               aria-hidden="true"
               onClick={handleOnCollapse}
            />
            }

            {haveParent &&
            <input checked={myChecked} style={{fontSize: '17px', paddingRight: '5px'}}
               className={`fa fa-${myChecked ? 'check-' : ''}square-o`}
               aria-hidden="true"
               onClick={handleOnCheck}
            />
            }
            <span style={{padding: '5px'}}>
                        {name}
                </span>
        </div>
    )
}

export default TreeRenderItem;
