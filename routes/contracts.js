const contractRoutes = (fastify, opts, done) => {
    fastify.register(require('fastify-axios'), {
        clients: {
            v1: {
                baseURL: 'https://k0o4ee3fcs-k0vcenufbi-connect.kr0-aws.kaleido.io/instances/0x5718eb3c5ee26ffbf5f7d0ba457cf5905c9a9fc8',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Basic azB3MjgzN2Z0cjpiZVZzU0NwTTF1V2hJVnVFMGVfS0RGUXBLTGw4SFVoZHROSWY3a0NKUFV3'
                }
            }
        }
    })

    fastify.get('/api/getBalance', async (req, reply) => {
        const response = await fastify.axios.v1.get('/balanceOf?tokenOwner=0x0e35c8caa2e77bcccf8203f4ad9e0c48547b1def&kld-from=0x0e35c8caa2e77bcccf8203f4ad9e0c48547b1def')
        reply.send(response?.data);
    });

    done();
};

module.exports = contractRoutes;