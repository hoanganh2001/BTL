/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import {
  SpecialCharacters,
  SpecialCharactersText,
} from '@ckeditor/ckeditor5-special-characters';
import { Style } from '@ckeditor/ckeditor5-style';
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from '@ckeditor/ckeditor5-table';
import { Undo } from '@ckeditor/ckeditor5-undo';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {}
Editor.builtinPlugins = [
  Alignment,
  AutoImage,
  Bold,
  CloudServices,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  GeneralHtmlSupport,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  List,
  ListProperties,
  Paragraph,
  PasteFromOffice,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersText,
  Style,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  Underline,
  Undo,
  UploadAdapter,
];

Editor.EditorConfig = {
  plugins: [Table, TableToolbar],

  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'fontBackgroundColor',
      'fontColor',
      'fontFamily',
      'fontSize',
      '|',
      'alignment',
      'horizontalLine',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'insertTable',
      '|',
      'imageUpload',
      'imageInsert',
      '|',
      'findAndReplace',
      'undo',
      'redo',
    ],
  },
  language: 'vi',
  ui: {
    poweredBy: {
      forceVisible: false,
    },
  },
  image: {
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties',
    ],
  },
};

export default Editor;
