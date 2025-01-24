import './create-foto-data.js';
import './miniature.js';
import './picture-modal.js';
import './upload-modal.js';
import './validate-form.js';
import './slider.js';
import {createPhotoData} from './create-foto-data.js';
import {renderThumbnails} from './miniature.js';
import {thumbnailClickHendler} from './picture-modal.js';
const datasets = createPhotoData();
renderThumbnails(datasets);
thumbnailClickHendler(datasets);
