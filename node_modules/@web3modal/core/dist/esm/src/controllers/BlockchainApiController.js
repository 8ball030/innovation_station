import { CoreHelperUtil } from '../utils/CoreHelperUtil.js';
import { FetchUtil } from '../utils/FetchUtil.js';
import { OptionsController } from './OptionsController.js';
const baseUrl = CoreHelperUtil.getBlockchainApiUrl();
const api = new FetchUtil({ baseUrl });
export const BlockchainApiController = {
    fetchIdentity({ caipChainId, address }) {
        return api.get({
            path: `/v1/identity/${address}`,
            params: {
                chainId: caipChainId,
                projectId: OptionsController.state.projectId
            }
        });
    }
};
//# sourceMappingURL=BlockchainApiController.js.map