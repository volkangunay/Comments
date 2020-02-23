import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import ApprovalCard from './approvalCard';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui comments" style={{
            paddingTop: '10px',
            paddingLeft: '10px'
        }}>
            <ApprovalCard>
                <Comment
                    name='VolkanGünay'
                    timeAgo='5'
                    star='5'
                    comment='Lorem ipsum dolor sit amet.'
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <Comment
                    name='John Doe'
                    timeAgo='5'
                    star='5'
                    comment='Lorem ipsum dolor sit amet.'
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

            <ApprovalCard>
                <Comment
                    name='John Doe'
                    timeAgo='5'
                    star='5'
                    comment='Lorem ipsum dolor sit amet.'
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    name='John Doe'
                    timeAgo='10'
                    star='10'
                    comment='Volkan ile geziyoruz'
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);