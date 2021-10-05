import "../Summary/Summary.scss";
import { Link } from "react-router-dom";

function Summary() {
  return (
    <div className="summary">
      <h3 className="summary__title">Product Owner Individual Survey</h3>
      <p className="summary__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit
        nisl, tincidunt vitae venenatis sed, feugiat a lectus. Fusce pulvinar
        consequat nisl et suscipit. Etiam vulputate massa vitae est
        pellentesque, ut semper urna tempor. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Donec volutpat quam eget lorem venenatis
        varius. Curabitur ut nibh erat. Proin id varius ex. Fusce pretium vel
        urna fermentum vehicula. Nam vel ultricies sapien, nec tincidunt mi.
        Mauris viverra odio vitae sollicitudin suscipit. Proin id orci eu urna
        volutpat tempor. Fusce nec est mi. Aliquam accumsan quis arcu vel
        scelerisque. Suspendisse a consectetur odio. Cras et nunc vitae tortor
        sagittis vulputate at at eros. Vestibulum tempor volutpat nunc, ac
        finibus diam varius id. Cras dui elit, laoreet vitae nulla non, rhoncus
        scelerisque erat. Etiam et molestie est. Aliquam feugiat elit et
        volutpat gravida. Duis ipsum diam, mattis vel pharetra quis, varius eget
        diam. Sed et rutrum massa. Curabitur vestibulum lectus non libero
        fringilla rhoncus. Vestibulum ornare leo eu justo consectetur lacinia.
        Suspendisse pellentesque blandit tortor eu pellentesque. Proin id leo
        consectetur, egestas felis nec, consequat enim. Aenean non mollis massa,
        nec dignissim arcu. Aliquam lacinia dui purus, sed convallis nisi
        imperdiet sed. Vestibulum lobortis libero non nisl molestie congue. Sed
        hendrerit condimentum sapien non pulvinar. Pellentesque ipsum libero,
        hendrerit mollis semper eu, dignissim et erat. Praesent ultricies dictum
        lobortis. Maecenas porttitor mattis dapibus. Nulla facilisi. Vivamus
        pellentesque, leo et iaculis euismod, nisi magna suscipit mi, congue
        porta mi metus vitae orci. Curabitur id iaculis mi. Integer mattis
        libero et ligula vestibulum, id pharetra magna viverra. Maecenas ac urna
        vel lorem euismod maximus id ac orci. Phasellus fermentum fringilla erat
        ac luctus. Mauris tincidunt tincidunt risus venenatis porta. Curabitur
        placerat vulputate sem in scelerisque. Etiam non enim quis mauris tempor
        dictum. Curabitur tempus tristique dolor non maximus. Morbi egestas,
        turpis in fermentum maximus, sapien diam dictum erat, sit amet volutpat
        arcu tellus consequat dui. Sed condimentum odio eros, et imperdiet purus
        mollis id. Ut accumsan enim et massa malesuada lacinia. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Aliquam maximus pulvinar orci vitae laoreet. Donec ut pulvinar
        ante, eu tincidunt sapien. In finibus nisi sit amet imperdiet
        pellentesque. Aenean fringilla orci ac vulputate cursus. Praesent
        faucibus felis at sagittis pretium. Pellentesque nibh massa, varius ac
        ipsum sollicitudin, sollicitudin rhoncus nisi.
      </p>

      <Link to="questions">
        <button className="summary__btn">Continue</button>
      </Link>
    </div>
  );
}

export default Summary;
