/**
 * Created by Jeo on 11/29/2016.
 */
/**This Helps you to print contents of a array in the form of table.**/


/** In this example person is an array which is passed to the function and
 *  "rows" is the another array which hold the table row inforamations including data as well as <td></td>,<tr>..
 *
 */


 var DisplayTable = React.createClass({
    render:function(){
        //making the rows to display
        var rows=[];
        this.props.data.forEach(function(person) {
        rows.push(<tr><td>{person.name}</td><td>{person.roll}</td></tr>)
        });
        //returning the table
        return(
             <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

/***
 * for full project u can reffer this link http://voidcanvas.com/react-tutorial-understanding-and-making-the-first-application/
 * **/