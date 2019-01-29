// The submit button needs to store to mongo DB and to render "blog list". 
// The Blog list will then link to individual BlogPage


import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Col, Row, Container} from "../components/Grid";
import { Input, TextArea,  FormBtn }from "../components/Form";
import imageYogaHeader from "../images/yogablog.jpg";

export class blogs extends Component {

// Setting our component's initial state
state = {
  blogs: [],
  title: "",
  author: "",
  image: "",
  blogEntry: ""
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

    render() {
      return ( 
   <div className = "App" >


        <Container fluid>
          <Row>
            <Col size="md-6">
              
              <Jumbotron>
              <image className="blogHeadLeft" src={imageYogaHeader} alt= "Nature and serene waters"/> 
              
             {/* <Image src={Image}> */}
             {/* <Image source={require('./src/images/yogablog.jpg')} /> */}
                <h1>Submit Your Greatest Blog Here</h1>
                {/* </image> */}
              
              </Jumbotron>

              <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />

              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />


              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Add Your Image (sauce)"
              />

             
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="blogEntry"
                placeholder="Blog Entry (Optional)"
              />

              {/*
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              > 
                Submit Book
              </FormBtn>  
            */}

              </form>

              </Col>
              </Row>    
          </Container>

</div> 

      );
      }
      }


export default blogs;