import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Collapsible, CollapsibleItem, Tabs, Tab, Collection, CollectionItem, Modal} from 'react-materialize';
// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="book">
            <DocumentTitle title={props.username + " - SoundMix"} />
            <div className="row">
                <Button className="red" onClick={props.goBack}>Back</Button>
            </div>


            <div>
                <p>{props.username}</p>
            </div>


        </div>
    );
}