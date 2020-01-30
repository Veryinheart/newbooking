import React, { Component, Fragment } from 'react';
import { List, Avatar, Icon, Input } from 'antd';
import axios from 'axios';
const { Search } = Input;


// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'http://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//     });
// };





const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class Content extends Component {

    constructor() {
        super();

        this.state = {
            loading: "false",
            listData: [],

        };
        this.listDataAPI = [];
        this.handleSearch = this.handleSearch.bind(this);
    };










    componentDidMount() {
        let self = this;
        axios.defaults.timeout = 8000;
        axios.get('https://fake-hotel-api.herokuapp.com/api/hotels')
            .then(async function (response) {
                if (response.data.length !== 0) {
                    await response.data.forEach(element => {
                        let jsonObj = {};
                        jsonObj["id"] = element.id;
                        jsonObj["href"] = '/hoteldetail/id';
                        jsonObj["avatar"] = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
                        jsonObj["country"] = element.country;
                        jsonObj["city"] = element.city;
                        jsonObj["stars"] = element.stars;
                        jsonObj["prices"] = element.prices;
                        jsonObj["content"] = element.description;
                        jsonObj["images"] = element.images;
                        jsonObj["title"] = element.name;

                        self.state.listData.push(jsonObj);
                        self.listDataAPI.push(jsonObj);

                        // self.setState({ 'listData': [...self.state.listData.concat(jsonObj)] })
                        console.log(jsonObj);

                    }
                    );
                    self.setState({
                        'loading': "true"
                    })


                }
            }
            )
    }


    handleSearch(event) {

        let result = [];
        let searchText = String(event.target.value).toLowerCase();
        //console.log(this.conflictAPI);
        //console.log(searchText);
        this.listDataAPI.filter(element => {
            // console.log(element)

            if (element.title.toLowerCase().includes(searchText)) {
                result.push(element);

            } else if (element.country.toLowerCase().includes(searchText)) {
                result.push(element);
            } else if (element.city.toLowerCase().includes(searchText)) {
                result.push(element);
            } else if (element.content.toLowerCase().includes(searchText)) {
                result.push(element);
            }
            return element.key;
        });
        this.setState({
            listData: result
        });
        //console.log(this.state.conflictInfo)




    };



    render() {
        return (
            <Fragment>
                <Search placeholder="input search text"
                    onSearch={value => console.log(value)} enterButton style={{ width: '30%' }} onChange={this.handleSearch} />

                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 8,
                    }}
                    dataSource={this.state.listData}

                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                <IconText type="message" text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src={item.images[0]}
                                />
                            }>
                            <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default Content
