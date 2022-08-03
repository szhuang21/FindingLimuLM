import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const Title = () => {
    return (
        <div className="mt-40 flex flex-row place-content-center gap-6">
            <h1 className="text-center text-7xl place-content-center">
                FindingLimu   
            </h1>
            <div className="w-20 align-middle">
                <FontAwesomeIcon icon={faFeatherPointed} className = "text-blue-900 fill-current align-middle" />
            </div>
        </div>

    )
}
  
export default Title