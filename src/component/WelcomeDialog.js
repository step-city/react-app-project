
/**
 *特例关系-通过 props 定制
 *
 * @param {*} props
 * @returns
 */
function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  export default Dialog;