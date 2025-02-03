import CreateServerModal from '../CreateServerModal/CreateServerModal'
import EditServerModal from '../EditServerModal/EditServerModal'
import ImagePreview from '../ImagePreview/ImagePreview'
import InviteModal from '../InviteModal/InviteModal'


function Modal() {
    return (
        <>
            <CreateServerModal />
            <EditServerModal/>
            <InviteModal linkCode={"DV4E5F"}/>
            <ImagePreview/>
        </>
    )
}

export default Modal