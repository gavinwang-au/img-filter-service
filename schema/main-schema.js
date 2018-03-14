const payloadSchema = {
        drm: {
            $validate: {
                required: false,
                boolean : true
            }
        },
        episodeCount: {
            $validate: {
                required: false,
                integer: true
            }
        },
        image: {
            $validate: {
                required: false,
                object: true
            }
        },
        slug: {
            $validate: {
                required: true,
                string: true
            }
        },
        title: {
            $validate: {
                required: true,
                string: true
            }
        }
};

const mainSchema = {
    payload: {
        $validate: {
            required: true,
            array: true
        },
        $items: function(item) {
            return payloadSchema;
        }
    }
};

module.exports = mainSchema;