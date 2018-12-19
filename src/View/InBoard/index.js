import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomList from '../../Components/CustomList';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';

const URL = 'https://api.gamer.com.tw/mobile_app/forum/v1/B.php';

class InBoard extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.location.name;
    this.bsn = this.props.match.params.bsn;
    this.state = {
      result: [],
      page: 1
    };
  }
  async APIFire() {
    try {
      let json = await API(URL, { bsn: this.bsn, page: this.state.page });
      this.setState(prev => ({
        result: [...prev.result, ...json.list],
        page: (prev.page += 1)
      }));
    } catch (e) {
      console.log('InBoard api error');
      console.log(e);
    }
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div>
        <CustomList>
          {this.state.result.map((article, key) => (
            <li key={key}>
              <Link
                to={{
                  pathname: `/article/${this.bsn}/${article.snA}`,
                  name: article.title
                }}
              >
                <p>{article.title}</p>
              </Link>
            </li>
          ))}
        </CustomList>
        <LoadButton onClick={() => this.APIFire()}>Load More</LoadButton>
      </div>
    );
  }
}
export default InBoard;
