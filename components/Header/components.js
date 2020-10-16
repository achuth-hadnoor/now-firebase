import { useState } from 'react';
import { IconValue as Icon } from '@/components/styles'
import { settings, command, mail, power, bell } from 'react-icons-kit/feather';
import { useAuth } from '@/lib/auth';
import Avatar from '../Avatar';
import { BubbleWrapper, BubbleItem } from './elements';
import { Bubble } from '../Bubble';

export const UserBubble = () => {
    const { user, signout } = useAuth()
    const signOut = () => {
        signout();
    }

    return (
        <Bubble
            BubbleIcon={
                () => (
                    <img
                        style={{height:30,width:30,borderRadius:25 }}
                        src={user?.photoUrl}
                    // signout={signOut}
                    />
                )
            }

            BubbleItem={
                () =>
                    <BubbleWrapper style={{right:0}} top={true}>
                        <BubbleItem  tabIndex={0}>
                            <Avatar src={user.photoUrl} />
                            <div className="info">
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                            <style>{`
                                .info { 
                                    padding:0px 5px 
                                }
                                .info p {  
                                    margin:0;
                                    font-size: 13px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                        `}</style>
                        </BubbleItem>
                        <BubbleItem onClick={() => { alert('lol') }} tabIndex={0}>
                            <Icon style={{ padding: '0px 3px' }} icon={settings} /> Settings
                    </BubbleItem>
                        <BubbleItem  tabIndex={0}>
                            <Icon style={{ padding: '0px 3px ' }} icon={command} /> Keyboard Shortcuts
                    </BubbleItem>
                        <BubbleItem  tabIndex={0}>
                            <Icon style={{ padding: '0px 3px ' }} icon={mail} /> Contact Us
                    </BubbleItem>
                        <BubbleItem onClick={signOut}>
                            <Icon style={{ padding: '0px 3px ' }} icon={power} />Logout
                    </BubbleItem>
                        <BubbleItem tabIndex={0}>
                            <div className="info">
                                <p>sample</p>
                                <p>test</p>
                            </div>
                        </BubbleItem>
                    </BubbleWrapper>
            }
        />
    )
}

export const NotiBubble = () => {
    return (
        <Bubble
            BubbleIcon={() => (
                <Icon icon={bell} style={{padding:'10px',margin:'10px 0px ',cursor:'pointer'}}/>
            )}

            BubbleItem={
                () => (
                    <BubbleWrapper  style={{right:0}}>
                        <BubbleItem style={{ textAlign: 'center' }}  tabIndex={0}>
                            All Caught Up
                </BubbleItem>
                    </BubbleWrapper>
                )
            }
        />
    )
}
