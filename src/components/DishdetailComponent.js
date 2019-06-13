import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Media } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

    }
    renderDish(dish) {

        if (dish != null)
            return (
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
              
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(comments) {

        if (comments != null) {
            const cmts = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {comment.date}</p>
                    </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{cmts}</ul>
                </div>

            );
        }
        else
            return (
                <div></div>
            );
    }
    render() {
        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>);
        }

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>

        );
        
            }
        }
        
export default DishDetail;